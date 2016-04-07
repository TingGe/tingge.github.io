var myApp = angular.module('myApp', []);

myApp.controller('BookCtrl', function BookCtrl($scope) {
    $scope.books = [{
        'name': 'ECMAScript 6入门',
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
    }]
});
