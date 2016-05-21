import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './src/app';
import Home from './src/home';
import About from './src/about';

ReactDOM.render(
		<Router history={browserHistory} >
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="about" component={About} />
			</Route>
		</Router>,
		document.getElementById('app')
);
