"use strict";
{

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourcemaps =require('gulp-sourcemaps');


gulp.task('hello', function (done) {
    console.log('Hello World!');
    done();
    });

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
        baseDir: "./"
        },
        port: 3000
        });
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    });

}
