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
      dist: 'dist',
      distDemo: 'demo/dist'
    },

    jshint: {

      ignore_warning:{
        options: {
        '-W099': true,
        },
        src: 'js/**/*.js'
      },

      options: {

          globals: {
              "curly": true,
              "eqnull": true,
              "eqeqeq": true,
              "undef": true,
              "globals": {
                    "jQuery": true
                }
          }
        }
    },

    concat: {
      aria: {
        src: [
          'js/aria.js',
          'js/**/*.js',
          'js/config.js' // this needs to be the last item in this list
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


    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'demo/dist/css/<%= pkg.name %>.css.map'
        },
        src: 'demo/less/base.less',
        dest: 'demo/dist/css/<%= pkg.name %>.css'
      }
    },

    csslint: {
      options: {
        csslintrc: 'demo/.csslintrc'
      },
      dist: [
        'demo/dist/css/<%= pkg.name %>.css'
      ]
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        advanced: false
      },
      minifyCore: {
        src: 'demo/dist/css/<%= pkg.name %>.css',
        dest: 'demo/dist/css/<%= pkg.name %>.min.css'
      }
    },

    watch: {
        grunt: { files: ['Gruntfile.js'] },
        js: {
            files: 'js/**/*.js',
            tasks: ['default']
        },
        less: {
            files: 'demo/less/**/*.less',
            tasks: ['default']
        },
        demo: { files: 'demo/*' },
        options: {
            livereload: true
        }
    },

    connect: {
      server: {
        options: {
            hostname: 'localhost',
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

grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-less');

grunt.registerTask('default', ['clean', 'jshint', 'less', 'csslint', 'cssmin', 'concat', 'uglify']);


grunt.registerTask('dev',['connect:server']);


};
