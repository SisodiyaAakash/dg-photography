module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/styling/main.css': 'assets/styling/main.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/styling',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/styling',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'assets/script/main.min.js': ['assets/script/main.js']
        }
      }
    },
    watch: {
      css: {
        files: ['assets/styling/**/*.scss'], // Watch all SCSS files
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: ['assets/script/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);
};
