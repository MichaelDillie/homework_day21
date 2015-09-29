var React = require('react');


module.exports = React.createClass({
	render: function() {
		return(
			<div className="job-post-page">
				<span className="jobPost-title">{this.props.model.get('title')}</span>
				<span className="jobPost-dateCreated">{this.props.model.get('dateCreated')}</span>
				<div></div>
				<span className="jobPost-company">{this.props.model.get('company')}</span>
				<span className="jobPost-location">{this.props.model.get('location')}</span>
				<div className="jobPost-description">{this.props.model.get('description')}</div>
				<span className="job-tag">{this.props.model.get('tags')}</span>
			</div>
		)
	}
});
