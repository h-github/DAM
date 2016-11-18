'use strict';

var gulp = require('gulp');
var gettext = require('gulp-angular-gettext');

gulp.task('pot', function () {
  return gulp.src(['src/app/**/*.html', 'src/app/**/*.js'])
  .pipe(gettext.extract('template.pot', {
            // options to pass to angular-gettext-tools...
          }))
  .pipe(gulp.dest('src/i18n/'));
});

gulp.task('translations', function () {
  return gulp.src('src/i18n/**/*.po')
  .pipe(gettext.compile())
  .pipe(gulp.dest('src/app/translations/'));
});
