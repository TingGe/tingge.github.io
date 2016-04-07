module.exports = grunt => {
  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // 读取 package.json的内容，形成json数据
    pkg: grunt.file.readJSON('package.json'),
    // 清除
    clean: ["dist"],
    // ES6 > ES5
    browserify: {
      dist: {
        files: {
          "test/js/app.js": ["src/index.js"]
        },
        options: {
          transform: [["babelify", { "presets": ["es2015"] }]]
        }
      }
    },
    // 压缩
    uglify: {
      build: {
        options: {
          sourceMap: true
        },
        files: {
          'test/js/app.min.js' : ['test/js/app.js']
        }
      }
    },
    // 复制到 dist
    copy: {
      main: {
        files: [
          {
            cwd: 'bower_components',
            expand: true,
            flatten: false,
            src: ['**/*'],
            dest: 'dist/lib'
          },
          {
            expand: true,
            flatten: true,
            src: ['test/js/app.min.js'],
            dest: 'dist/js/'
          }
        ]
      }
    },
    // markdown > html
    markdown: {
      all: {
        options: {
          template: 'templates/index.html',
          markdownOptions: {
            gfm: true,
            condeLines: {
              before: '<span>',
              after: '</span>'
            }
          }
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: './*.md',
            dest: 'dist/',
            ext: '.html'
          }
        ]
      }
    },
    // 最终效果验证
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
            'dist'  //主目录
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: ['./src/*.js'],
        tasks: ['default']
      },
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
        },
        files: [
          'src/*.js',
          '*.md'
       ]
      }
    }
  });

  grunt.registerTask('serve', ['connect:server', 'watch']);
  grunt.registerTask('default', ['clean', 'browserify', 'uglify', 'copy', 'markdown', 'serve']);
};
