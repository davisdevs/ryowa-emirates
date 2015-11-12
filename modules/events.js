
var xola = require('./xola');
var stubhub = require("./stubhub");

module.exports = {
  search: function (categoryArray) {
    promises = [xola.searchXola(categoryArray)].concat(stubhub.searchStubhub(categoryArray));
    return promises;

  }
}
