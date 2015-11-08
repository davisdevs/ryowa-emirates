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
  events.searchXola(categoryArray).then(function(data){
    res.json({
      message: "Event Results",
      data: data
    })
  })
  // Promise.all([
  //   events.searchXo(categoryArray),
  //   events.searchStubhub(categoryArray)
  // ]).spread(function(xolaEvents, stubhubEvents) {
  //   console.log(xolaEvents);
  //
  //   res.json(JSON.stringify({
  //     message: "Event Results",
  //     data: data
  //   }));
  // }).catch(function(err) {
  //   console.log(err);
  // })
});

module.exports = router;
