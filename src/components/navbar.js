import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router';


export default class Menu extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<Navbar inverse> 
				<Navbar.Header>
					<Navbar.Brand>
      			<Link to="/home"> Aaron Wells </Link>
      		</Navbar.Brand>
      		<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav> 
						<LinkContainer to={{ pathname: '/about'}}>
							<NavItem> About </NavItem>
						</LinkContainer>
							<NavDropdown title='Projects' id="project-dropdown"> 
								<LinkContainer to={{ pathname: '/projects/FPGA_IOT'}}>
									<NavItem> FPGA IOT </NavItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: '/projects/Two_Way_Mirror'}}>
									<NavItem> Two Way Mirror </NavItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: '/projects/NASA_Robo-Ops'}}>
									<NavItem> NASA Robo-Ops </NavItem>
								</LinkContainer>
							</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>	
	};

}

