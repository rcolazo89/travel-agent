var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    })

    watch('./app/index.html', function(){
        browserSync.reload();
    });
// anytime css is saved the cssInject task begins
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
});
// styles is a dependency for this function to work
gulp.task('cssInject',['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});