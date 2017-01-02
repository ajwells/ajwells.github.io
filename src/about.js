import React from 'react';
import { PageHeader, Image } from 'react-bootstrap';
import Navbar from './components/navbar.js';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<Image src='/src/images/logo.png' responsive />
			<Navbar />
		</div>	
	};
}
