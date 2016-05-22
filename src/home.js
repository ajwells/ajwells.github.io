import React from 'react';
import HMenu from './components/h-menu';
import Header from './components/header';
import Footer from './components/footer';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<div> Logo </div>
			<HMenu />
			<Footer />
		</div>	
	};
}
