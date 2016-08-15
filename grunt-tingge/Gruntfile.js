module.exports = grunt => {
  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      main: {
        files: [{
          src: ['css/**', 'img/**', 'js/**'],
          dest: '../'
        }, {
          src: ['templates/index.html'],
          dest: '../index.html'
        }, {
          cwd: 'node_modules',
          expand: true,
          flatten: false,
          src: [
            'bootstrap/dist/**',
            'font-awesome/**',
            'jquery/dist/jquery.min.js',
            'autocjs/build/**',
            'octocard/bin/octocard.js',
            'html2canvas/dist/html2canvas.min.js'
          ],
          dest: '../lib/'
        }]
      }
    },
    markdown: {
      all: {
        files: [{
          expand: true,
          src: 'html/*.md',
          dest: '../',
          ext: '.html'
        }],
        options: {
          template: 'templates/article.html',
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
        livereload: 35729 //声明给 watch 监听的端口
      },

      server: {
        options: {
          open: true, //自动打开网页 http://
          base: [
            '../' //主目录
          ]
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>' //监听前面声明的端口  35729
        },
        files: [
          'doc/*.md',
          'css/*.css',
          'js/*.js',
          'templates/*.html'
        ]
      }
    }
  });

  grunt.registerTask('serve', ['connect:server', 'watch']);
  grunt.registerTask('default', ['copy', 'markdown', 'serve']);
};
