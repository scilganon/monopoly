var gulp = require('gulp');

gulp.task('hello', function() {
    console.log("Hello, world!")
});

gulp.task('test', function(){
    console.log('test')
});

gulp.task('error', function () {
    // throw new Error('error');
});

gulp.task('default', [
    'hello',
    'error',
    'test'
]);

//----------------------

var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    return gulp
        .src('styles/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('styles/css'));
});

gulp.task('dev-watch', function(){
    gulp.watch('styles/*.less', [
        'less'
    ])
});
