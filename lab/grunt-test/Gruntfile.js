module.exports = grunt => {
  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {expand: true, src: ['bower_components/**'], dest: 'app/html/'}
        ]
      }
    },
    uglify: {
      build: {
        src: ['js/app.js'],
        dest: 'js/app.min.js'
      }
    },
    markdown: {
      all: {
        files: [
          {
            expand: true,
            src: 'doc/*.md',
            dest: 'app/html/',
            ext: '.html'
          }
        ],
        options: {
          template: 'templates/index.html',
          markdownOptions: {
            gfm: true,
            condeLines: {
              before: '<span>',
              after: '</span>'
            }
          }
        }
      }
    },
    connect: {
      options: {
        port: 9090,
        hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35729  //声明给 watch 监听的端口
      },

      server: {
        options: {
          open: true, //自动打开网页 http://
          base: [
            'app'  //主目录
          ]
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
        },
        files: [
          'js/app.js',
          'doc/*.md',
          'css/*.css'
       ]
      }
    }
  });

  grunt.registerTask('serve', ['connect:server', 'watch']);
  grunt.registerTask('default', ['copy', 'markdown', 'uglify', 'serve']);
};
