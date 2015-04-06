var gulp      = require('gulp'),
    minifyJs  = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');

gulp.task("minificaCSS", function(){
    gulp.src("_site/css/main.css")
        .pipe(minifyCss({keepBreaks: true}))
        .pipe(gulp.dest("./images"));
});

gulp.task('minificaJS', function(){
    gulp.src('_site/js/*.js')
        .pipe(minifyJs())
        .pipe(gulp.dest("./images"));
});

gulp.task('default', function(){
//    console.log("aaaaa");
    var teste = gulp.src("_site/css/main.css");
    console.log(typeof teste);
});