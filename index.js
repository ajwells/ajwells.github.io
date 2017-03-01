import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './src/app';
import Home from './src/home';
import About from './src/about';
import Projects from './src/projects';
import Resume from './src/resume';

ReactDOM.render(
		<Router history={hashHistory} >
			<Route path="/" component={App} >
				<IndexRoute component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
				<Route path="/projects/:name" component={Projects} />
				<Route path="/resume" component={Resume} />
				<Route path="/resume/:page" component={Resume} />
			</Route>
		</Router>,
		document.getElementById('app')
);
