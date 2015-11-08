
var request = require("superagent");
var Promise = require("bluebird")
var xola = require("../config/config").xola;
var stubhub = require("../config/config").stubhub;
var categories = require("../modules/categories");
var googleGeocoder = require("../config/config").googleGeocoder

// reverse({lat:, lon:}) =>[ { latitude: 36.563593,
// longitude: -121.9521499,
// country: 'United States of America',
// city: undefined,
// state: 'California',
// zipcode: '93953',
// streetName: '17 Mile Drive',
// streetNumber: undefined,
// countryCode: 'US' } ]
var geocoderProvider = 'google';
var httpAdapter = 'https';
var extra = {
  apiKey: googleGeocoder.api_key,
  formatter: null
}
var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);

var searchXola = function(categoryArray) {
  var resultsArray = []
  var query = "";

  // look up category module for list of other categories to search
  for (var i=0; i<categoryArray.length; i++) {
    if (i === (categoryArray.length -1)) {
      query += categories.getXolaSearchCategory(categoryArray[i]);
    } else {
      query += (categories.getXolaSearchCategory(categoryArray[i])+',');
    }
  }
  console.log("Searching xola: " + query);
  var get_url = xola.url+"/api/experiences?category="+query+"&limit=3";
  return new Promise(function(resolve, reject){
    request.get(get_url)
    .set("X-API-KEY", xola.api_key)
    .end(function(err, res){
      if(err) {
        reject(err);
      } else {
        // event start starts from index 1
        for (var i=0; i<res.body.data.length; i++) {
          var event = res.body.data[i];
          var lat = event.geo.lat;
          var lon = event.geo.lng;
          if (typeof event === "undefined" || typeof lat === "undefined" || event.complete !== true) {
            continue;
          } else {

            var countryCode = "";
            var city = "";
            /* setTimeout(function() {
            //   geocoder.reverse({lat: lat, lon: lon}, function(err, res){
            //     if (err) {
            //       console.warn("Geocoding failed: "+ err)
            //     } else {
            //       countryCode = res[0].countryCode;
            //       city = res[0].city;
            //     }
            //   })
            // }, 2500)

            //swap out cause reverse geocoding is removed
            // if (event.complete === true && countryCode === "US"){
            */
            if (event.complete === true) {
              resultsArray.push({"provider": "xola",
              id: event.id,
              category: event.category, //original xola category TODO: Implement lookup in category (interest) module
              title: event.name,
              image: xola.url+event.photo.src,
              date: "range",
              price: event.price,
              url: "",
              excerpt: event.excerpt,
              description: event.desc,
              city: city })
            }
          //}
        }
      } //end of for loop
      console.log(resultsArray.length);
      resolve(resultsArray);
    }})
  })
}

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
          for (var i=0; i<4; i++) {
            console.log(i);
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
            }
          }
          resolve(results)
        })
      }))
    }
    return Promise.all(promises).then(function(results) {
      finalResults = results
    })

    return finalResults;
  }

  module.exports = {
    searchXola : searchXola,
    searchStubhub : searchStubhub,
    search: function (categoryArray) {
      var results;
      return new Promise(searchXola(categoryArray).then(function(xolaRes){
        results = xolaRes
        return searchStubhub(categoryArray).then(function(stubhubRes) {
          results = results.concat(stubhubRes);
        })
      }, function(err) {
        console.log(err);
      }))
      // console.log(promises);
      // return promises;
    }
  }

  // var stubhubSearch = new Promise (function(resolve, reject) {
  //   resolve(searchStubhub(categoryArray));
  // })
