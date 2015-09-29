var Backbone = require('backbone');

moduel.exports = Backbone.Model.extend({
	defaults: {
		companyName: '',
		logo: '',
		backgroundImg: '',
		companySize: 0,
		location: ''
	}
});
