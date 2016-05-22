import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Menu extends React.Component {

	constructor(props) {
		super(props);

	};

	render() {
		return <div>
				<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
				<li><Link to="/about" activeClassName="active">About</Link></li>
				<li><Link to="/projects" activeClassName="active">Projects</Link></li>
		</div>	
	};
}
