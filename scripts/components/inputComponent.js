
var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<div>Post your job</div>
				<h4>Title</h4>
				<input type="text" />
				<h4>Company Name</h4>
				<input type="text" />
				<h4>Location</h4>
				<input type="text" />
				<h4>Description</h4>
				<textarea></textarea>
				<h4>Tags</h4>
				<input type="text" />
				<button>Submit Job</button>
			</div>
		)
	}
});
