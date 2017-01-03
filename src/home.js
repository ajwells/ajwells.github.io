import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import Navbar from './components/navbar';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<Navbar active='Home'/>
			<Image src='src/images/logo2.png' fluid />
		</div>
	};
}
