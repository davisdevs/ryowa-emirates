var express = require('express');
var router = express.Router();

/* GET list of all categories with name and id*/
router.get('/', function(req, res, next) {
  res.render('index', {});
});


module.exports = router;
