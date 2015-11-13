var express = require('express');
var router = express.Router();
var events = require("../modules/events");
var categories = require("../modules/categories");
var Promise = require("bluebird");

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
router.get('/events', function(req, res) {
  var categoryArray = req.query.cat;
  if (typeof categoryArray === "string") {
    categoryArray = [categoryArray];
  }
  for (var i=0; i < categoryArray.length; i++) {
    categoryArray[i] = decodeURIComponent(categoryArray[i]);
  }
  console.log("Searching for: " + categoryArray);
  Promise.all(events.search(categoryArray)).spread(function(xolaResults, stubhubResults) {
    var flatten = [].concat.apply([], stubhubResults)
    var finalResults = xolaResults.concat(flatten)
    var payload = ({
      message: 'Event Results',
      data: finalResults
    })
    res.json(payload)
  })
});

module.exports = router;
