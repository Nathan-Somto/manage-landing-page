const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
function buildStyles(){
    return gulp.src('./styles/**/*.scss').pipe(sass()).pipe(gulp.dest('./css'));
}
//exports.buildStyles = buildStyles;
 function watch (){
    gulp.watch(['./styles/**/*.scss','*.html'],buildStyles);
}
exports.default =  gulp.series(buildStyles,watch);