var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/')
  .get(function(req, res) {
    res.send('respond with a resource');
  })
  .post(function(req, res) {
    res.send('POST request to the users');
  })
  .put(function(req, res) {
    res.send('PUT request to the users');
  })
  .delete(function(req, res) {
    res.send('DELETE request to the users');
  });


router.get('/user/:id', function(req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // otherwise pass the control to the next middleware function in this stack
  else next(); //
}, function(req, res, next) {
  // render a regular page
  res.render('regular',{id: req.params.id});
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function(req, res, next) {
  res.render('special',{id: req.params.id});
});

module.exports = router;
