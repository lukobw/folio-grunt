module.exports = function (grunt){

  //project config
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
            'css/main.css': 'sass/main.sass'
      }
    }
  },

  imagemin: {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'img/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'img/build/'
        }]
     }
  },

 watch: {
    scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    }
}
});

  //load the plugin tasks
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');

  //default task
grunt.registerTask('default', ['sass', 'imagemin', 'watch']);

};