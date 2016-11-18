'use strict';

var gulp = require('gulp');
var fs = require('fs');
var argv = require('yargs').argv;
var ngConstant = require('gulp-ng-constant');
var rename = require('gulp-rename');

var environment = argv.env || 'development';
var ENV = '';

gulp.task('env', function () {
    //ENV = JSON.parse(fs.readFileSync('./src/app/config/config-' + environment + '.json', 'utf8')).ENV;
    //gulp.src('src/app/config/config-' + environment + '.json')
    //.pipe(ngConstant({
    //  name: 'config'
    //}))
    //.pipe(rename('config.js'))
    //.pipe(gulp.dest('src/app/config'));
});