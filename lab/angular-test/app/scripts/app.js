var myApp = angular.module('myApp', []);

myApp.controller('BookCtrl', function BookCtrl($scope) {
  $scope.books = [{
    'name': 'The Web platform: Browser technologies',
    'author': 'whatwg',
    'url': 'https://platform.html5.org/'
  }, {
    'name': 'Make 命令教程',
    'author': '阮一峰',
    'url': 'http://www.ruanyifeng.com/blog/2015/02/make.html'
  }, {
    'name': 'Html5 课程',
    'author': 'sallypanda',
    'url': 'https://sallypanda.gitbooks.io/html5/content/'
  }, {
    'name': '跟我一起写 Makefile (PDF重制版)',
    'author': 'SeisMan',
    'url': 'http://how-to-write-makefile.readthedocs.io/zh_CN/latest/'
  }, {
    'name': '跟我一起写 Makefile',
    'author': '',
    'url': 'https://wiki.ubuntu.org.cn/%E8%B7%9F%E6%88%91%E4%B8%80%E8%B5%B7%E5%86%99Makefile'
  }, {
    'name': 'Linux 设备驱动 Edition 3',
    'author': 'Jonathan Corbet, Alessandro Rubini 和 Greg Kroah-Hartman',
    'url': 'http://www.deansys.com/doc/ldd3/index.html'
  }, {
    'name': 'LinuxCommand.org',
    'author': 'William Shotts',
    'url': 'http://www.linuxcommand.org/index.php'
  }, {
    'name': 'The Linux Command Line 中文版',
    'author': '流年',
    'url': 'http://www.kancloud.cn/thinkphp/linux-command-line'
  }, {
    'name': 'Linux中文man在线手册',
    'author': '51CTO',
    'url': 'http://os.51cto.com/linuxman/'
  },
  {
    'name': '《JavaScript Patterns》 examples in ECMAScript6',
    'author': 'DavidCai1993',
    'url': 'https://github.com/DavidCai1993/JsPatterns-ES6'
  }, {
    'name': 'Understanding ECMAScript 6',
    'author': 'Nicholas C. Zakas',
    'url': 'https://github.com/nzakas/understandinges6'
  }, {
    'name': 'JavaScript 版数据结构与算法',
    'author': '',
    'url': 'https://github.com/JsAaron/data-structures-and-algorithms'
  }, {
    'name': 'JavaScript 标准参考教程（alpha）',
    'author': '阮一峰',
    'url': 'http://javascript.ruanyifeng.com/'

  }, {
    'name': '深入浅出 ES6',
    'author': 'Eric-Faust',
    'url': 'http://www.infoq.com/cn/es6-in-depth/'
  }, {
    'name': 'ECMAScript 6 入门',
    'author': '阮一峰',
    'url': 'http://es6.ruanyifeng.com/'

  }, {
    'name': 'Babel 入门教程',
    'author': '阮一峰',
    'url': 'http://www.ruanyifeng.com/blog/2016/01/babel.html'
  }, {
    'name': 'Using ES6 and ES7 in the Browser, with Babel 6 and Webpack',
    'author': 'CenturyGuo',
    'url': 'http://www.jianshu.com/p/6969b8822630'
  }, {
    'name': 'Use ES6 With Babel6 in Nodejs',
    'author': 'XGHeaven',
    'url': 'http://blog.xgheaven.cn/2015/11/13/use-babel6-in-nodejs/'
  }, {
    'name': '全栈工程师之路-Node.js',
    'author': '桑世龙',
    'url': 'http://i5ting.github.io/nodejs-fullstack/'
  }, {
    'name': 'JavaScript 模块化七日谈',
    'author': '黄玄',
    'url': 'http://huangxuan.me/2015/07/09/js-module-7day/'
  }]
});
