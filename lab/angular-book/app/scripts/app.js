var myApp = angular.module('myApp', []);

myApp.controller('BookCtrl', function BookCtrl($scope) {
  $scope.books = [{
    'name': 'React Bits',
    'author': 'Vasa 等',
    'url': 'https://vasanthk.gitbooks.io/react-bits/'
  }, {
    'name': 'TypeScript Handbook（中文版）',
    'author': 'Patrick Zhong',
    'url': 'https://zhongsp.gitbooks.io/typescript-handbook/content/'
  }, {
    'name': 'JavaScript Promise迷你书（中文版）',
    'author': '原著：azu / 翻译：liubin、kaku、honnkyou',
    'url': 'http://liubin.org/promises-book/'
  }, {
    'name': 'Redux 中文文档',
    'author': 'GitBook 共享者合作翻译',
    'url': 'http://cn.redux.js.org/index.html'
  }, {
    'name': 'Flask-Script',
    'author': 'smurfix',
    'url': 'https://flask-script.readthedocs.io/en/latest/'
  }, {
    'name': '欢迎使用 Flask',
    'author': '译者 亦念、云尔、atupal',
    'url': 'http://docs.jinkan.org/docs/flask/index.html'
  }, {
    'name': 'NEC:CSS 方案',
    'author': '网易（杭州）前端CSS开源项目',
    'url': 'http://nec.netease.com/'
  }, {
    'name': 'NEJ: 跨平台web前端开发框架',
    'author': '网易前端组工程师',
    'url': 'http://nej.netease.com/'
  }, {
    'name': '学习CSS布局',
    'author': '由敏明君和sunnylost翻译',
    'url': 'http://zh.learnlayout.com/'
  }, {
    'name': 'Linux就该这么学',
    'author': '刘遄',
    'url': 'http://www.linuxprobe.com/'
  }, {
    'name': 'HASKELL 趣学指南',
    'author': 'MnO2',
    'url': 'http://learnyoua.haskell.sg/content/zh-cn/index.html'
  }, {
    'name': 'Angularity',
    'author': 'Dave Ceddia',
    'url': 'https://daveceddia.com/'
  }, {
    'name': '[译] 为你定制的 React 学习路线',
    'author': 'DAVE CEDDIA',
    'url': 'https://gold.xitu.io/entry/578375b85bbb5000610cc247'
  }, {
    'name': '如何做到 jQuery-free？',
    'author': '阮一峰',
    'url': 'http://www.ruanyifeng.com/blog/2013/05/jquery-free.html'
  }, {
    'name': 'Mokoversity',
    'author': 'Mokoversity Inc',
    'url': 'https://www.mokoversity.com/'
  }, {
    'name': 'Simple Web of Things (SWoT) Architecture Model',
    'author': 'W3C: Web of Things Interest Group',
    'url': 'http://hollobit.github.io/swot-model/'
  }, {
    'name': 'HTML5 Rocks',
    'author': 'Google',
    'url': 'http://www.html5rocks.com/zh/'
  }, {
    'name': 'JS函数式编程指南',
    'author': 'Linghao Li',
    'url': 'https://www.gitbook.com/book/llh911001/mostly-adequate-guide-chinese/details'
  }, {
    'name': '程序员必须知道的8大排序和3大查找',
    'author': 'shan9liang',
    'url': 'http://www.cr173.com/html/15301_all.html'
  }, {
    'name': '超算平台 Linux 等相关文档',
    'author': '中国科学院青岛生物能源与过程研究所',
    'url': 'http://scc.qibebt.cas.cn/docs/'
  }, {
    'name': '各种 vim Cheat Sheet for Programmers',
    'author': 'Michael',
    'url': 'http://michael.peopleofhonoronly.com/vim/'
  }, {
    'name': 'VI 快捷键全图',
    'author': '',
    'url': 'https://tingge.github.io/img/vi_tutorial.png'
  }, {
    'name': 'vi/vim使用进阶',
    'author': '易水博客',
    'url': 'http://easwy.com/blog/archives/advanced-vim-skills-catalog/'
  }, {
    'name': 'Git pretty',
    'author': 'Justin Hileman',
    'url': 'http://justinhileman.info/article/git-pretty/'
  }, {
    'name': 'git - 简易指南',
    'author': '罗杰·杜德勒',
    'url': 'http://www.bootcss.com/p/git-guide/'
  }, {
    'name': 'Git Pocket Guide',
    'author': 'Richard E. Silverman',
    'url': 'http://chimera.labs.oreilly.com/books/1230000000561'
  }, {
    'name': 'Git Community Book 中文版',
    'author': 'liuhui998.com/',
    'url': 'http://gitbook.liuhui998.com/index.html'
  }, {
    'name': 'Pro GIt 2nd Edition(2014)',
    'author': 'git',
    'url': 'https://git-scm.com/book/zh/v2'
  }, {
    'name': 'git-flow 备忘清单',
    'author': 'Daniel Kummer (Tweet) ',
    'url': 'http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html'
  }, {
    'name': '微信硬件平台解决方案',
    'author': '吴跃前',
    'url': 'http://www.kancloud.cn/yueqian_scut/iot-wechat/107380'
  }, {
    'name': '一步步搭建物联网系统',
    'author': '黄峰达',
    'url': 'http://www.ituring.com.cn/book/1580'
  }, {
    'name': '一起学koa',
    'author': '17koa',
    'url': 'http://17koa.com/koa-generator-examples/'
  }, {
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
  }, {
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
