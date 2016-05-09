'use strict';

var version = "1.0.0";

var message = 'current version is ' + version;
var foo = (function () {
  return message;
})

function main () {
  console.log(foo());
}

module.exports = main;