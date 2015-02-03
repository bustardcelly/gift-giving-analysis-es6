'use strict';

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var glob = require('glob');

var featuresIn = ['test', 'features', '*.feature'].join(path.sep);
var featuresOut = ['bundle', 'features.js'].join(path.sep);
var featureDeclaration = 'window.cukefeatures';

var stepsIn = ['test', 'features', 'step_definitions', '*.step.js'].join(path.sep);
var stepsOut = ['test', 'features', 'step_definitions', 'all.steps.js'].join(path.sep);
var stepsTemplate = fs.readFileSync([process.cwd(), 'all-steps.template'].join(path.sep), 'utf8');

var camelCaseFilePath = function(filepath) {
  var composite;
  var filename = filepath.split(path.sep).pop();
  filename = filename.slice(0, filename.indexOf('.step.js'));
  composite = filename.split('-');
  composite = composite.map(function(item) {
    return item.charAt(0).toUpperCase() + item.slice(1, item.length);
  });
  composite.push('Step');
  return composite.join('');
};
var normalizeStepPath = function(filepath) {
  return "'" + ['.', path.basename(filepath, path.extname(filepath))].join(path.sep) + "'";
};

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

      features.push(
        files.map(function(filepath) {

          var lines = fs.readFileSync(filepath, 'utf8').split('\n');
          lines = lines.map(function(line, index, arr) {

            var composite = ['"', line, crgToken, '"'];
            if(index < arr.length - 1) {
              composite.push(lineAppend);
            }
            return composite.join('');

          });
          return lines.join('\r\n');

        })
      );

      featuresStr = features.join(lineAppend + crgToken + lineAppend + '\r\n');
      fs.writeFile(featuresOut, featureDeclaration + ' = ' + featuresStr + ';', 'utf8', function(error) {
        if(error) {
          console.log('Error in writing to file ' + featuresOut + '.');
        }
      });
    }

  });

});

gulp.task('stepify', function() {

  var imports = [];
  var modules = [];

  glob(stepsIn, function(error, files) {

    if(error) {
      console.error(error);
    }
    else {

      files.forEach(function(filepath) {
        var importName = camelCaseFilePath(filepath);
        modules.push(importName);
        imports.push(['import', importName, 'from', normalizeStepPath(filepath)].join(' ') + ';');
      });

      stepsTemplate = stepsTemplate.replace('$1', imports.join('\r\n'));
      stepsTemplate = stepsTemplate.replace('$2', modules.join(','));
      fs.writeFile(stepsOut, stepsTemplate, 'utf8', function(error) {
        if(error) {
          console.log('Error in writing to file ' + stepsOut + '.');
        }
      });
    }

  });

});

gulp.task('test', ['featurify', 'stepify'], function() {
  // console.log('complete.');
});