var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var del = require('del');

//

gulp.task("css", function() {
    return gulp.src(["src/css/*.css"])
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: "last 10 versions"
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist/css"))
        .pipe(reload({
            stream: true
        }));
});

gulp.task("script", function() {
    return gulp.src(["src/script/*.js"])
        .pipe(gulp.dest("dist/script"))
        .pipe(reload({
            stream: true
        }));
});


gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('clean', function() {
    del.sync(['dist/*']);
});

// 静态服务器
gulp.task("dev", ['clean', 'html', 'css', 'script'], function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch(["src/*.html"], ['html']);
    gulp.watch(["src/css/*.css"], ['css']);
    gulp.watch(["src/script/*.js"], ['script']);
});
