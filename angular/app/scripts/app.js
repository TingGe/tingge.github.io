var myApp = angular.module('myApp', []);

myApp.controller('BookCtrl', function BookCtrl($scope) {
  $scope.books = [{
    'name': 'ECMAScript 6入门',
    'author': '阮一峰',
    'url': 'http://es6.ruanyifeng.com/'

  }, {
    'name': 'Effective Java',
    'author': 'Joshua Bloch',
    'url': '#'
  }, {
    'name': 'Year without Pants',
    'author': 'Scott Berkun',
    'url': '#'
  }, {
    'name': 'Confessions of public speaker',
    'author': 'Scott Berkun',
    'url': '#'
  }, {
    'name': 'JavaScript Good Parts',
    'author': 'Douglas Crockford',
    'url': '#'
  }]
});
