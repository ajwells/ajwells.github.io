import React from 'react';
import { PageHeader, Jumbotron, Image } from 'react-bootstrap';
import Navbar from './components/navbar.js';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<Image src='../src/images/logo.png' responsive />
			<Navbar />
			<div>
				<h1>
				{this.props.params.name}
				</h1>
			</div>
		</div>	
	};
}
