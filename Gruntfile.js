'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    jscs: {
      options: {
        config: '.jscsrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    copy: {
      overwrite: {
        src: 'test/fixture.html',
        dest: 'tmp/overwrite.html'
      }
    },

    removeHtmlComments: {
      overwrite: {
        src: 'tmp/overwrite.html'
      },
      target: {
        src: 'test/fixture.html',
        dest: 'tmp/actual.html'
      }
    },

    nodeunit: {
      tests: 'test/*.js'
    },

    clean: {
      all: {
        src: 'tmp'
      }
    }
  });

  grunt.loadTasks('tasks');
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'jshint',
    'jscs',
    'copy',
    'removeHtmlComments',
    'nodeunit',
    'clean'
  ]);
};
