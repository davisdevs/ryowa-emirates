
var request = require("superagent");
var Promise = require("bluebird")
var stubhub = require("../config/config").stubhub;
var categories = require("../modules/categories");

var searchStubhub = function(categoryArray) {
  var promises = [];
  var results =[];
  var query = "";
  var idArray = []
  var id;
  // look up category module for list of other categories to search
  for (var i=0; i<categoryArray.length; i++) {
    id = categories.getStubhubSearchCategory(categoryArray[i]);
    if (typeof id === "undefined") {
      continue;
    } else {
      idArray.push(id);
    }
  }
  console.log("Searching sh: " + idArray);

  for (var i = 0; i < idArray.length; i++) {
    promises.push(new Promise(function(resolve, reject){
      request.get(stubhub.url+"/search/catalog/events/v3?categoryId="+idArray[i])
      .set("Authorization", "Bearer "+stubhub.api_key)
      .end(function(err, res){
        if(err) {
          console.warn(err);
          return reject(err);
        } else {
          // add events from per GET request to results array
          for (var i=0; i<res.body.length; i++) {
            var event = res.body.events[i];
            if (event.status === "Active" && event.geos[1].name === "United States") {
              results.push(
                {
                  provider: "stubhub",
                  id: event.id,
                  category: event.categories[1].name, //original xola category TODO: Implement lookup in category (interest) module
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
            console.log("sh : " + results.length);
            resolve(results)
          }
        })
      }))
      // console.log(promises);
    }// end of outer loop

    return promises;
  }

  module.exports = {
    searchStubhub : searchStubhub
  }
