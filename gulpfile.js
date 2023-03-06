const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
function buildStyles(){
    return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('index.css'));
}
exports.buildStyles = buildStyles;
exports.watch = function(){
    gulp.watch('./styles/**/*.scss',['sass']);
}