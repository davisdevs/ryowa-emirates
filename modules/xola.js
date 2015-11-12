

var request = require("superagent");
var Promise = require("bluebird")
var xola = require("../config/config").xola;
var stubhub = require("../config/config").stubhub;
var categories = require("../modules/categories");
var googleGeocoder = require("../config/config").googleGeocoder;
var Xola = require('../models/xola');

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
  var query = buildQueryString(categoryArray);
  return new Promise(function(resolve, reject){
    searchXolaApi(query)
    // reverse geocode for city data and memoise it
    .then(function(responseArray) {
      return sanitizeResponses(responseArray)
    })
    .then(function(sanitizedArray) {
      resolve(sanitizedArray);
    })
    .catch(function(err) {
      console.log(new Error(err))
      reject(err)
    })
  })
}

var searchXolaApi = function (query) {
  var get_url = xola.url+"/api/experiences?category="+query+"&limit=10";
  return new Promise(function(resolve, reject){
    request.get(get_url)
    .set("X-API-KEY", xola.api_key)
    .end(function(err, res){
      if(err) {
        reject(err);
      } else {
        resolve(res.body.data);
      }})
    })
  }

  var sanitizeResponses = function(responseArray){
    var sanitizedArray = [];
    sanitizedArray.addEvent = function(event) {
      this.push({"provider": "xola",
      id: event.id,
      category: categories.getAppCategory(event.category),
      title: event.name,
      image: event.photo? xola.url+event.photo.src : "",
      date: "range",
      price: event.price,
      url: "",
      excerpt: event.excerpt,
      description: event.desc,
      city: event.city })
    }
    // map sanitizeSingle to remaining response
    return Promise.all(responseArray.map(function(response) {
      return sanitizeSingle(response);
    })).then(function(cleanedResponse) {
      cleanedResponse.forEach(function(event) {
        if (event !== false) {
          try {
            sanitizedArray.addEvent(event)
          } catch(err) {
            console.log(err.stack, event);
          }
        }
      })
      return sanitizedArray
    }).catch(function(err) {
      console.log(err)
    })
  }

  var sanitizeSingle = function (event) {
    console.log('Sanitizing: ', event.id);
    return new Promise(function(resolve, reject) {
      if (typeof event === "undefined" || typeof event.geo.lat === "undefined" ||
      typeof event.geo.lng === "undefined"|| event.complete !== true) {
        resolve(false)
      } else {
        // find db for stored city data
        Xola.findOne({'id': event.id}, function(err, xolaEntry) {
          if (err) {
            reject(new Error(err));
          }
          // create record if not found
          if(!xolaEntry) {
            reverseGeocodeAndSave(event)
            .then(function(reversed) {
              resolve(reversed)
            })
            .catch(function(err) {
              reject(new Error(err))
            })
          } else {
            // TODO: update city property if lat/lon changes
            // return saved entry
            console.log("FOUND WOW");
            event.city = xolaEntry.city
            resolve(event)
          }
        }) // end of findOne()
      }
    }) // end of returning promise
  }


  var reverseGeocodeAndSave = function(event) {
    console.log("reversing: ", event.id);
    var lat = event.geo.lat;
    var lon = event.geo.lng;
    return new Promise (function(resolve, reject) {
      setTimeout(function() {
        geocoder.reverse({lat: lat, lon: lon}, function(err, res){
          if (err) {
            console.log(new Error(err));
            reject(err)
          } else if (res[0].countryCode !== "US") {
            resolve(false);
          } else {
            var location = res[0];
            countryCode = location.countryCode;
            city = location.city;
            if (typeof city === 'undefined') {
              console.log('reverse failed for: ', event.name, event.id);
              resolve(false)
              return ;
            }
            Xola.create({
              id: event.id,
              lat: lat,
              lon: lon,
              city: city,
              countryCode: countryCode
            }, function(err, saved) {
              if (err) {
                console.log(err);
                reject(err)
              } else {
                // append city info to original event object
                event.city = city;
                console.log("Saved new xola entry", saved);
                resolve(event);
              }
            });
          }
        })
      }, 2500)
    }) //end of promise
  }

  var buildQueryString = function(categoryArray) {
    var query = ''
    // look up category module for list of other categories to search
    for (var i=0; i<categoryArray.length; i++) {
      if (i === (categoryArray.length -1)) {
        query += categories.getXolaSearchCategory(categoryArray[i]);
      } else {
        query += (categories.getXolaSearchCategory(categoryArray[i])+',');
      }
    }
    console.log("Searching xola: " + query);
    return query;
  }

  module.exports = {
    searchXola : searchXola
  }
