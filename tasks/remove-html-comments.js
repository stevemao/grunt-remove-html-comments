'use strict';
var chalk = require('chalk');
var removeHtmlComments = require('remove-html-comments');

module.exports = function(grunt) {
  grunt.registerMultiTask('removeHtmlComments', 'Remove comments in HTML', function() {
    var files = this.files;

    files.forEach(function(file) {
      var fileSrc = file.src;

      if (fileSrc.length > 1) {
        grunt.log.warn('Only one src per dest is supported. The first file is used');
      }

      var src = fileSrc[0];
      var dest = file.dest || src;

      var html = grunt.file.read(src);
      var result = removeHtmlComments(html);

      var removedCount = result.comments.length;

      if (removedCount > 0) {
        result.comments.forEach(function(comment) {
          grunt.verbose.writeln(chalk.red(comment) + chalk.magenta('removed'));
        });

        grunt.verbose.writeln(dest + ': ' + chalk.red('✖ ') + removedCount + ' comments removed.');
      }

      grunt.file.write(dest, result.data);
    });

    var tally = files.length;
    grunt.log.write('Processed ' + chalk.cyan(tally) + (tally === 1 ? ' file' : ' files'));
    grunt.log.writeln();
  });
};
