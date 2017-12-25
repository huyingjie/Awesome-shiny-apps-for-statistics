var gulp = require('gulp');
var markdown = require('gulp-markdown');
var rename = require("gulp-rename");

 
gulp.task('default', function () {
    return gulp.src('../README.md')
        .pipe(markdown())
        .pipe(rename("index.html"))
        .pipe(gulp.dest('../public'));
});
