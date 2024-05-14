

var gulp = require('gulp');
var PluginError = require('plugin-error');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var argv = require('yargs').argv;

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

var argv = require('yargs').argv;

let HELPERS = {
    execute: (command) => {
      const process = exec(command);
      // eslint-disable-next-line no-console
      process.stdout.on('data', (data) => { console.log(data.toString()); });
      // eslint-disable-next-line no-console
      process.stderr.on('data', (data) => { console.log(data.toString()); });
      process.on('exit', (code) => {
        // eslint-disable-next-line no-console
        console.log('Process exited with code ' + code.toString());
      });
      return process;
    }
  };

function compileScripts() {
    return HELPERS.execute('node --max-old-space-size=8192 ./node_modules/rollup/dist/bin/rollup -c');
}

function compileMjsScripts() {
    return HELPERS.execute('npx rollup -c rollup.mjs.config.js');
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
        .pipe(terser(terserOptions))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulpIf(makeSourceMaps, sourcemaps.write("./")));
}

function mjsMin() {
    return gulp.src(['dist/raw-mjs/kendo.*.js', 'dist/raw-mjs/cultures/*.js', 'dist/raw-mjs/messages/*.js'], { base: "dist/raw-mjs" })
        .pipe(gulpIf(makeSourceMaps, sourcemaps.init()))
        .pipe(terser(terserOptions))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('dist/mjs'));
}

gulp.task('scripts', gulp.parallel(gulp.series(compileScripts, minScripts)));
gulp.task('scripts:mjs', gulp.parallel(gulp.series(compileMjsScripts, mjsMin)));

function minScripts() {
    return gulp.src(['dist/raw-js/kendo.*.js', 'dist/raw-js/cultures/*.js', 'dist/raw-js/messages/*.js'], { base: "dist/raw-js" })
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
                require("@rollup/plugin-node-resolve").nodeResolve(),
                require('@rollup/plugin-virtual')({
                    custom: `
                        import 'jquery';
                        ${imports}
                    `
                })
            ]
        })
        .pipe(source('kendo.custom.js'))
        .pipe(buffer());

    var minSrc = src
        .pipe(clone())
        .pipe(gulpIf(makeSourceMaps, sourcemaps.init()))
        .pipe(terser(terserOptions))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulpIf(makeSourceMaps, sourcemaps.write("./")));

    return merge(src.pipe(gulp.dest("dist/js")), minSrc.pipe(gulp.dest("dist/js")));
});


gulp.task('build', gulp.parallel('scripts'));
