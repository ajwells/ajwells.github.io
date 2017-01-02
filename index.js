import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './src/app';
import Home from './src/home';
import About from './src/about';
import Projects from './src/projects';

ReactDOM.render(
		<Router history={browserHistory} >
			<Route path="/" component={App} >
				<IndexRoute component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/projects/:name" component={Projects} />
			</Route>
		</Router>,
		document.getElementById('app')
);
