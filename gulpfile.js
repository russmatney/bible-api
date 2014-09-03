var gulp = require('gulp'),
    connect = require('gulp-connect'),
    shell = require('gulp-shell');

var handlebars = require('gulp-handlebars'),
  wrap = require('gulp-wrap'),
  declare = require('gulp-declare'),
  concat = require('gulp-concat');

var debug = require('gulp-debug');

var paths = {
  views: ['./public/index.html', './public/views/*/**.hbs'],
  scripts: ['./public/js/*/**.js']
};

gulp.task('connect', function() {
  connect.server({
    root: "public",
    port: 4000,
    livereload: true
  });
})

gulp.task('templates', function() {
  gulp.src(paths.views)
    .pipe(handlebars({
      handlebars: require('ember-handlebars')
    }))
    .pipe(wrap('Ember.Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'Ember.TEMPLATES',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(paths.views, ['templates']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('goserver', shell.task(['gin']));

gulp.task('default', ['connect', 'scripts', 'templates', 'watch']);
