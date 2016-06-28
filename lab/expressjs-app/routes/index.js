// Router-level middleware
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express：Web 服务和 RESTful API'});
});

module.exports = router;
