var express = require('express');
var router = express.Router();
var events = require("../modules/events");
var categories = require("../modules/categories");

/* GET list of all categories with name and id*/
router.get('/events/categories', function(req, res) {
  var namesArray = categories.getAllCategoryNames();
  res.json({
      message: 'List of all categories',
      data: namesArray
      }
  );
});

/* Get list of events that fit */
router.get('/events/categories/:id', function(req, res) {
  var data = events.searchCategoriesXola();
    res.json({ data: data});
});

module.exports = router;
