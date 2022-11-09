

var fs = require('fs');
var gulp = require('gulp');
var logger = require('gulp-logger');
var PluginError = require('plugin-error');
var sourcemaps = require('gulp-sourcemaps');
var lazypipe = require('lazypipe');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var argv = require('yargs').argv;

var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var clone = require('gulp-clone');
var gulpIf = require('gulp-if');
var merge = require('merge2');
var filter = require('gulp-filter');
var flatmap = require('gulp-flatmap');
const exec = require('child_process').exec;
const terser = require('gulp-terser');
const rollupStream = require('@rollup/stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

var makeSourceMaps = !argv['skip-source-maps'];

var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var calc = require("postcss-calc");
var browsers = [
    "Explorer >= 9",
    "last 3 Edge versions",
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Opera versions",
    "last 2 Safari major versions",
    "last 2 iOS major versions",
    "Android >= 4.4",
    "ExplorerMobile >= 10"
];
var postcssPlugins = [
    calc({
        precision: 10
    }),
    autoprefixer({
        browsers: browsers
    })
];

var cleanCssOptions = {
    compatibility: 'ie9',
    aggressiveMerging: false,
    advanced: false
};

var fromLess = lazypipe()
    .pipe(logger, { after: 'LESS complete!', extname: '.css', showChange: true })
    .pipe(less, {
        math: 'strict',
        relativeUrls: true,
        plugins: []
    })
    .pipe(replace, /\.\.\/mobile\//g, ''); // temp hack for the discrepancy between source and generated "source"

var minify = lazypipe()
    .pipe(logger, { after: 'Min CSS complete!', extname: '.min.css', showChange: true } )
    .pipe(cleanCss, cleanCssOptions)
    .pipe(rename, { suffix: ".min" });

var argv = require('yargs').argv;

let HELPERS = {
    execute: (command) => {
      const process = exec(command);
      process.stdout.on('data', (data) => { console.log(data.toString()); });
      process.stderr.on('data', (data) => { console.log(data.toString()); });
      process.on('exit', (code) => {
        console.log('Process exited with code ' + code.toString());
      });
      return process;
    }
  };

function compileScripts() {
    return HELPERS.execute('node --max-old-space-size=8192 ./node_modules/rollup/dist/bin/rollup -c');
}

function compileMjsScripts() {
    return HELPERS.execute('npm run scripts:mjs');
}

function renameModules(match) {
    return match.replace(/['"]([\w\.\-\/]+)?['"]/g, function(_, module) {
        return module == "jquery" ? '"jquery"' : `"${module}.min"`;
    });
}

/**
 * @type {import('terser').MinifyOptions}
 */
const terserOptions = {
    mangle: {
        reserved: [ "define", "KendoLicensing" ]
    }
};

function uglifyScripts(stream) {
    return stream
        .pipe(gulpIf(makeSourceMaps, sourcemaps.init()))
        .pipe(replace(/define\((?:["'][\w\.\-\/]+["'])?.+?\]/g, renameModules))
        .pipe(replace(/"kendo\.core"/g, '"kendo.core.min"'))
        .pipe(logger({ extname: '.min.js', showChange: true }))
        .pipe(terser(terserOptions))
        .pipe(rename({ suffix: ".min" }))
        .pipe(logger({ extname: '.js.map', showChange: true }))
        .pipe(gulpIf(makeSourceMaps, sourcemaps.write("./")));
}

function compileModulesScripts() {
    return HELPERS.execute('npm run scripts:modules');
}

function mjsMin() {
    return gulp.src(['dist/mjs/kendo.*.js', 'dist/mjs/cultures/*.js', 'dist/mjs/messages/*.js'], { base: "dist/mjs" })
        .pipe(gulpIf(makeSourceMaps, sourcemaps.init()))
        .pipe(logger({ after: 'Terser: Uglify complete!', showChange: true }))
        .pipe(terser(terserOptions))
        .pipe(logger({ after: 'Sourcemap: Write complete!', extname: '.js.map', showChange: true }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('dist/mjs'));
}

function distThirdParty() {
    return gulp.src('js/{jquery,angular,pako,jszip}*.*')
        .pipe(logger({ after: "ThirdParty: Scripts copied!", display: 'name', dest: './dist/js/', showChange: true }))
        .pipe(gulp.dest('dist/js'));
}

gulp.task('scripts', gulp.parallel(
    gulp.series(compileMjsScripts, mjsMin),
    gulp.series(compileScripts, gulp.parallel(distThirdParty, minScripts)),
    compileModulesScripts
));

function minScripts() {
    return gulp.src(['dist/js/kendo.*.js', 'dist/js/cultures/*.js', 'dist/js/messages/*.js'], { base: "dist/js" })
        .pipe(filter(file => !/\.min\.js/.test(file.path)))
        .pipe(flatmap(uglifyScripts))
        .pipe(gulp.dest("dist/js"));
}

gulp.task("custom", function() {
    var files = argv.c;

    if (!files) {
        throw new PluginError({
            task: "custom",
            plugin: "custom",
            message: "please provide a list of the components to be included in the build with -c, separated with ','"
        });
    }

    const imports = argv.c.split(',').map((bundles) => `import './js/kendo.${bundles}.js'`).join(';');

    var src = rollupStream({
            input: 'custom',
            output: {
                format: 'umd',
                globals: { jquery: '$' },
                strict: false
            },
            external: ['jquery'],
            treeshake: false,
            plugins: [
                require('@rollup/plugin-buble')(),
                require('@rollup/plugin-virtual')({
                    custom: `
                        import 'jquery';
                        ${imports}
                    `
                })
            ]
        })
        .pipe(source('kendo.custom.js'))
        .pipe(logger({ before: 'Custom: Bundling!', after: 'Custom: Bundle complete!', showChange: true }))
        .pipe(buffer());

    var minSrc = src
        .pipe(clone())
        .pipe(gulpIf(makeSourceMaps, sourcemaps.init()))
        .pipe(logger({ after: 'Terser: Uglify complete!', extname: '.min.js', showChange: true }))
        .pipe(terser(terserOptions))
        .pipe(rename({ suffix: ".min" }))
        .pipe(logger({ after: 'Sourcemap: Write complete!', extname: '.js.map', showChange: true }))
        .pipe(gulpIf(makeSourceMaps, sourcemaps.write("./")));

    return merge(src.pipe(gulp.dest("dist/js")), minSrc.pipe(gulp.dest("dist/js")));
});

gulp.task("less",function() {
    var css = gulp.src(`styles/${argv.styles || '**/kendo*.less'}`, { base: "styles" })
        .pipe(fromLess())
        .pipe(postcss(postcssPlugins));

    var minCss = css.pipe(clone())
        .pipe(gulpIf(makeSourceMaps, sourcemaps.init()))
        .pipe(minify())
        .pipe(gulpIf(makeSourceMaps, sourcemaps.write("./")));

    return merge(css, minCss)
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('build', gulp.parallel('scripts', 'less'));