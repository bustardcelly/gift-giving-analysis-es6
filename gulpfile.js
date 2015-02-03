'use strict';

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var glob = require('glob');

var featuresIn = ['test', 'features', '*.feature'].join(path.sep);
var featuresOut = ['bundle', 'features.js'].join(path.sep);
var featureDeclaration = 'window.cukefeatures';

gulp.task('featurify', function() {

  var features = [];
  var featuresStr = '';
  var lineAppend = '+';
  var crgToken = '&crarr';

  glob(featuresIn, function(error, files) {

    if(error) {
      console.error(error);
    }
    else {
      var fileIndex = 0;
      var fileLength = files.length;
      files.forEach(function(filepath) {
        var lines = fs.readFileSync(filepath, 'utf8').split('\n');
        var index = 0;
        lines.forEach(function(line) {
          lines[index] = ['"', line, crgToken, '"', (index === lines.length - 1) ? '' : lineAppend].join('');
          index++;
        });
        lines[lines.length-1] += (++fileIndex === fileLength) ? '' : [lineAppend, '"', crgToken, '"', lineAppend].join('');
        features = features.concat(lines);
      });

      featuresStr = features.join('\r\n');
      fs.writeFile(featuresOut, featureDeclaration + ' = ' + featuresStr + ';', 'utf8', function(error) {
        if(error) {
          console.log('Error in writing to file ' + featuresOut + '.');
        }
      });
    }

  });

});

gulp.task('test', ['featurify'], function() {
  // console.log('complete.');
});