var express = require('express');
var router = express.Router();

router.get('/about', function (req, res) {
  res.send('about');
});

router.get('/random.text', function (req, res) {
  res.send('random.text');
});

router.get('/ab?cd', function(req, res) {
  res.send('ab?cd will match acd and abcd');
});

router.get('/ab+cd', function(req, res) {
  res.send('ab+cd will match abcd, abbcd, abbbcd, and so on');
});

router.get('/ab*cd', function(req, res) {
  res.send('ab*cd will match abcd, abxcd, abRANDOMcd, ab123cd, and so on');
});

router.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e will match /abe and /abcde');
});

router.get(/a/, function(req, res) {
  res.send('/a/ will match /a/');
});

router.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/ will match butterfly， dragonfly， but not butterflyman，dragonfly man and so on');
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

router.get('/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});


module.exports = router;
