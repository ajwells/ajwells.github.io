import React from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import {Link} from 'react-router';


export default class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = { activeItem: props.active };
		this.handleItemClick = this.handleItemClick.bind(this);
	};

  handleItemClick (e, { name }) { this.setState({ activeItem: name }); }

	render() {
		const { activeItem } = this.state;

		return <div>
			<div style={{background: '#2C2A2A', paddingTop:'10px'}}>
				<div className='inverted ui horizontal divider'>
					<Menu inverted pointing secondary>
						<Menu.Item as={Link} to='/home' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}> 
							<Icon name='home'/>
							Home
						</Menu.Item>
						<Menu.Item as={Link} to='/about' name='About' active={activeItem === 'About'} onClick={this.handleItemClick}> 
							<Icon name='user'/>
							About
						</Menu.Item>
						<Menu.Item as={Link} to='/projects/all' name='Projects' active={activeItem === 'Projects'} onClick={this.handleItemClick}> 
							<Icon name='code'/>
							Projects
						</Menu.Item>
						<Menu.Item as={Link} to='/resume' name='Resume' active={activeItem === 'Resume'} onClick={this.handleItemClick}> 
							<Icon name='wpforms'/>
							Resume
						</Menu.Item>
					</Menu>
				</div>
			</div>
		</div>	
	};

}

