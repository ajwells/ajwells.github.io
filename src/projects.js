import React from 'react';
import { PageHeader, Jumbotron, Image } from 'react-bootstrap';
import Navbar from './components/navbar.js';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<Navbar active='Projects'/>
			<Image src='src/images/logo_large.png' responsive />
			<div>
				<h1>
				{this.props.params.name}
				</h1>
			</div>
		</div>	
	};
}
