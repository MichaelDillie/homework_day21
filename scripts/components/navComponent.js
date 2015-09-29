
var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div className="nav">

				<span className="logo"><strong>Fresh Jobs</strong></span>
				<a href="#Jobs">
					<span className="nav-links">JOBS</span>
				</a>
				<a href="#Companies">
					<span className="nav-links">COMPANIES</span>
				</a>
				<a href="#cities">
					<span className="nav-links">CITIES</span>
				</a>
				<a href="#Why-Fresh?">
					<span className="nav-links">WHY FRESH?</span>
				</a>
				<a href="#For-Employers">
					<span className="nav-links">FOR EMPLOYERS</span>
				</a>
			</div>
		)
	}
});
