import React from 'react';
import { Link, IndexLink } from 'react-router';
import Menu from './menu';

export default class VMenu extends React.Component {

	constructor(props) {
		super(props);

	};

	render() {
		return <div>
			<ul className="menu">
				<Menu />
			</ul>
		</div>	
	};
}
