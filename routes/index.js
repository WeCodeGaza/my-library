var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // TODO: update index to redirect to `catalog/`
  res.render('index', { title: 'My Library' });
});

module.exports = router;
