import React from 'react';
import { List, Divider, Grid, Rail, Image, Segment } from 'semantic-ui-react';
import Navbar from './components/navbar.js';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return <div>
			<Navbar active='About'/> 
			<div style={{paddingTop:'60px'}}/>
			<Grid columns={3} centered textAlign='center'>
				<Grid.Column>
					<Image src='src/images/me.jpg' shape='rounded' centered bordered />
					<Segment textAlign='center' style={{background:'#2C2A2A', color:'white', fontSize:'large'}}>
						<b>Computer Science Graduate Student</b>
						<Divider horizontal inverted>AT</Divider>
						<b>The College of William and Mary</b>
					</Segment>
					<Rail style={{color:'white', textAlign:'left'}} size='huge' position='left'>
						<div style={{paddingTop:'100px'}} />
						<List>
							<List.Item>
								<List.Icon name='user' />
								<List.Content>Aaron Wells</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='student' />
								<List.Content>The College of William and Mary</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='marker' />
								<List.Content>Williamsburg, VA</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='mail' />
								<List.Content>
									wells.aaron.j@gmail.com
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='github' />
								<List.Content>
									<a href='http://www.github.com/ajwells'>github.com/ajwells</a>
								</List.Content>
							</List.Item>
						</List>
					</Rail>
					<Rail style={{color:'white', textAlign:'left'}} size='huge' position='right'>
						<div style={{paddingTop:'100px'}} />
						<List>
							<List.Item>
								<List.Icon name='music' />
								<List.Content>
									<a href='https://www.youtube.com/watch?v=Kp7eSUU9oy8'>
									<div>Redbone -</div>
									<div>Childish Gambino</div>
									</a>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='book' />
								<List.Content>
									<a href='https://www.amazon.com/Practical-Electronics-Inventors-Third-Scherz/dp/0071771336/'>
									<div>Practical Electronics for Inventors -</div>
									<div>Paul Scherz & Simon Monk</div>
									</a>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='heartbeat' />
								<List.Content>
								<a href='http://sealteampt.com/'>Seal Team PT</a>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='car' />
								<List.Content>Honda Civic Si Mugen</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='game' />
								<List.Content>Overwatch</List.Content>
							</List.Item>
						</List>
					</Rail>
				</Grid.Column>
			</Grid>
		</div>	
	};
}
