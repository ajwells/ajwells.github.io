import React from 'react';
import VMenu from './components/v-menu';
import Header from './components/header';
import Footer from './components/footer';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<Header />
			<VMenu />
			<div className="content">
				Content
			</div>
			<Footer />
		</div>	
	};
}
