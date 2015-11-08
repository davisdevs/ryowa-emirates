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
router.get('/events', function(req, res) {
  var categoryArray = req.query.cat;
  if (typeof categoryArray === "string") {
    categoryArray = [categoryArray];
  }
  for (var i=0; i < categoryArray.length; i++) {
    categoryArray[i] = decodeURIComponent(categoryArray[i]);
  }
  console.log("Searching for: " + categoryArray);
  new Promise(function(resolve, reject) {
    resolve(events.search(categoryArray));
  }).then(function(data) {
    // console.log(data);
    res.json(JSON.stringify({
      message: "Event Results",
      data: data
    }));

  })
});

module.exports = router;
