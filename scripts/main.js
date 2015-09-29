'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var React = require('react');
var TipsComponent = require('./components/tipsComponent.js');
var InputComponent = require('./components/inputComponent.js');
var NavComponent = require('./components/navComponent.js');
var AppComponent = require('./components/appComponent.js');
var JobTagsComponent = require('./components/jobTagsComponent.js');

var mainContent = document.getElementById('main-content');
var forEmployersHTML = document.getElementById('for-employers');
var jobPosts = document.getElementById('job-post');

React.render (
	<div>
		<NavComponent />
	</div>,
	mainContent
);

React.render (
	<div>
		<InputComponent />
		<TipsComponent />
	</div>,
	forEmployersHTML
);

React.render (
	<div>
		<AppComponent />
	</div>,
	jobPosts
);

var Router = Backbone.Router.extend({

	routes: {
		'For-Employers': 'onForEmployers',
		'Jobs': 'onJobs'
	},

	onForEmployers: function() {
		$('.inputComponent').show();
		$('.inputComponent').css('display', 'inline-block');
		$('.mian-tips').show();
		$('.main-tips').css('display', 'inline-block');
		$('.job-post-page').hide();
	},
	onJobs: function() {
		$('.job-post-page').show();
		$('.inputComponent').hide();
		$('.mian-tips').hide();
		$('.mian-tips').css('display', 'none');
	}
});

var routing = new Router();
Backbone.history.start();

