var mongoose = require('mongoose');

module.exports = mongoose.model('Xola',{
	id: String,
	lat: String,
	lon: String,
	city: String,
	countryCode: String
});
