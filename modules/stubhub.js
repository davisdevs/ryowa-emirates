
var request = require("superagent");
var Promise = require("bluebird")
var stubhub = require("../config/config").stubhub;
var categories = require("../modules/categories");

var searchStubhub = function(categoryArray) {
  var promises = [];
  var query = "";
  var idArray = []
  var id;
  // look up category module for list of other categories to search
  idArray = categoryArray.map(function(category) {
    return categories.getStubhubSearchCategory(category)
  })

  console.log("Searching sh: " + idArray);

  return Promise.all(idArray.map(function(id) {
    return new Promise(function(resolve, reject) {
      request.get(stubhub.url+"/search/catalog/events/v3?categoryId="+id)
      .set("Authorization", "Bearer "+stubhub.api_key)
      .end(function(err, res){
        if(err) {
          console.warn(err);
          reject(err);
        } else {
          var responseArray = [];
          // add events from per GET request to results array
          for (var i=0; i<res.body.events.length; i++) {
            var event = res.body.events[i];
            if (event.status === "Active" && event.geos[1].name === "United States") {
              responseArray.push(
                {
                  provider: "stubhub",
                  id: event.id,
                  category: categories.getAppCategory(event.categories[1].id),
                  title: event.name,
                  image: event.imageUrl,
                  date: event.eventDateUTC,
                  price: event.price,
                  url: "http://stubhub.com/"+event.webURI,
                  excerpt: event.description,
                  description: "",
                  city: event.geos[3].name
                });
              }
            } // end of inner loop
            resolve(responseArray)
          }
        })
      })
    }))
  }

  module.exports = {
    searchStubhub : searchStubhub
  }
