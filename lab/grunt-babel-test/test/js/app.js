(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = function sum(a) {
  var b = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
  return a + b;
};

var square = function square(b) {
  return b * b;
};

var variable = 8;

var MyClass = function () {
  function MyClass(person) {
    _classCallCheck(this, MyClass);

    this.name = person.name;
    this.mail = person.mail;
  }

  _createClass(MyClass, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return MyClass;
}();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.MyClass = MyClass;

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

var person = {
  name: 'Ting Ge',
  mail: '505253293@163.com'
},
    ting = new _import.MyClass(person); // import "babel-polyfill";


var main = document.getElementById('main');
var str = ['<h1>Console: </h1>', '<pre>My Name: ' + ting.getName() + '<br/>', 'square(5)= ' + (0, _import.square)(5) + ' </pre>'].join('');
console.log(str);
main.innerHTML += str;

},{"./import":1}]},{},[2]);
