var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* TODO: Add code to show "You're so cool" */
/* in the path `/users/cool/` */

module.exports = router;
