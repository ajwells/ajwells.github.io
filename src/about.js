import React from 'react';
import Menu from './components/menu';
import Header from './components/header';
import Footer from './components/footer';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<Header />
			<Menu />
			<div className="content">
				Content
			</div>
			<Footer />
		</div>	
	};
}
