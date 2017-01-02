import React from 'react';
import { PageHeader } from 'react-bootstrap';
import Navbar from './components/navbar';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<PageHeader> Aaron Wells </PageHeader>
			<Navbar />
		</div>
	};
}
