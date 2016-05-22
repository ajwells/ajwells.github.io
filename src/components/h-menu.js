import React from 'react';
import { Link, IndexLink } from 'react-router';
import Menu from './menu';

export default class HMenu extends React.Component {

	constructor(props) {
		super(props);

	};

	render() {
		return <div>
			<ul className="h-menu">
				<Menu />
			</ul>
		</div>	
	};
}
