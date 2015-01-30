'use strict';

var gulp = require('gulp');
var traceur = require('gulp-traceur');
var replace = require('gulp-replace');

var moduleDefineMatch = /^(Object.defineProperties\((.|[\r\n])*?\);)/m;
var moduleDefineReplace = 'Object.defineProperty(module, \'exports\', {value: step});';

gulp.task('stepify', function() {
  return gulp.src('test/steps-es6/*.js')
            .pipe(traceur({
              modules: 'commonjs'
            }))
            .pipe(replace(moduleDefineMatch, moduleDefineReplace))
            .pipe(gulp.dest('test/features/step_definitions'));
});

gulp.task('test', ['stepify'], function() {
  console.log('complete.');
});