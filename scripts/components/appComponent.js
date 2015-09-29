var React = require('react');
var JobPostComponent = require('./jobPostComponent.js');
var jobPostModel = require('../models/jobPostModel.js');

var postModel1 = new jobPostModel({title: 'Junior Front-End Developer', dateCreated: 'Aug 23', company: 'Google •', location: 'Austin, TX', description: 'Looking for an entry level developer with knoledge of JS, jQuery, Backbone, and JSX', tags: ['JavaScript']});

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<JobPostComponent model={postModel1} />
			</div>
		);
	}
});
