

var fs = require('fs');
var gulp = require('gulp');
var logger = require('gulp-logger');
var PluginError = require('plugin-error');
var sourcemaps = require('gulp-sourcemaps');
var lazypipe = require('lazypipe');
var gulpUglify = require('gulp-uglify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var argv = require('yargs').argv;

var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var clone = require('gulp-clone');
var gulpIf = require('gulp-if');
var merge = require('merge2');
var requirejsOptimize = require('gulp-requirejs-optimize');
var flatmap = require('gulp-flatmap');

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

// uglify
var compress = {
    unsafe: true,
    hoist_vars: true,
    pure_getters: true
};

var mangle = {
    reserved: [ "define" ]
};

function renameModules(match) {
    return match.replace(/['"]([\w\.\-\/]+)?['"]/g, function(_, module) {
        return module == "jquery" ? '"jquery"' : `"${module}.min"`;
    });
}

var uglify = stream => stream
        .pipe(gulpUglify({ mangle: mangle, compress: compress, warnings: false }))
        .pipe(replace(/define\("[\w\.\-\/]+".+?\]/g, renameModules))
        .pipe(replace(/"kendo\.core"/g, '"kendo.core.min"'))
        .pipe(rename({ suffix: ".min" }));

gulp.task("custom", function() {
    var files = argv.c;
    const customFilePath = 'js/kendo.custom.js';

    if (!files) {
        throw new PluginError({
            task: "custom",
            plugin: "custom",
            message: "please provide a list of the components to be included in the build with -c, separated with ','"
        });
    }

    files = files.split(',').map(f => `"./kendo.${f}"`);

    fs.writeFileSync(customFilePath, `(function(f, define){
            define([${files.join(',')}], f);
        })(function(){
            "bundle all";
            return window.kendo;
        }, typeof define == 'function' && define.amd ? define : function(a1, a2, a3){ (a3 || a2)(); });`);

    var src = gulp.src(customFilePath)
        .pipe(requirejsOptimize({
            optimize: "none",
            paths: { jquery: "empty:" },
            logLevel: 2,
            onModuleBundleComplete: function() {
                fs.unlinkSync(customFilePath);
            }
        }));

    var minSrc = src
        .pipe(clone())
        .pipe(sourcemaps.init())
        .pipe(flatmap(uglify))
        .pipe(logger({ after: 'Scripts: Uglify complete', extname: '.min.js', showChange: true }))
        .pipe(logger({ after: 'Scripts: source map complete!', extname: '.map', showChange: true }))
        .pipe(sourcemaps.write("./"));

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