'use strict';

var React = require('react');
var TipsComponent = require('./components/tipsComponent.js');
var InputComponent = require('./components/inputComponent.js');
var NavComponent = require('./components/navComponent.js');

var mainContent = document.getElementById('main-content');

React.render (
	<div>
		<NavComponent />
		<TipsComponent />
		<InputComponent />
	</div>,
	mainContent
)
