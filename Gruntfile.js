module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n\n',

  // Clean Distribution folder
    clean: {
      dist: 'dist'
    },


    jshint: {
      core: {
        src: 'js/*.js'
      }
    },

    concat: {
      aria: {
        src: [
          'js/aria.js',
          'js/anchor.js',
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },


    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: true
      },
      dist: {
        src: 'dist/js/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      },
    },


    watch: {
        grunt: { files: ['Gruntfile.js'] },
        js: {
            files: 'js/*.js',
            tasks: ['default']
        },
        // demo: { files: 'demo/*.html' },
        // options: {
        //     livereload: true
        // }
    },

    connect: {
      server1: {
        options: {
            hostname: '*',
            port: 8083,
            base: '.',
            keepalive: true,
            open: true
        }
      }
    }

  });

grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify']);


// grunt.registerTask('dev',['connect:server1']);


};