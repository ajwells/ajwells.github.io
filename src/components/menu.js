import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Menu extends React.Component {

	constructor(props) {
		super(props);

	};

	render() {
		return <div>
			<ul className="menu">
				<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
				<li><Link to="/about" activeClassName="active">About</Link></li>
			</ul>
		</div>	
	};
}
