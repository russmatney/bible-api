var gulp = require('gulp'),
    connect = require('gulp-connect'),
    shell = require('gulp-shell');

var paths = {
  views: ['./public/*/**.html'],
  scripts: ['./public/js/*/**.js']
};

gulp.task('connect', function() {
  connect.server({
    root: "public",
    port: 4000,
    livereload: true
  });
})

gulp.task('html', function() {
  gulp.src(paths.views)
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(paths.views, ['html']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('goserver', shell.task(['gin']));

gulp.task('default', ['connect', 'scripts', 'html', 'watch']);
