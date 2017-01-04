import React from 'react';
import { Grid, Icon, Divider, Label, Item, Image, Segment } from 'semantic-ui-react';
import {Link} from 'react-router';
import Navbar from './components/navbar.js';

const projects = ['two_way_mirror', 'bluefruit_led_clock', 'robo_ops', 'lsb_stego'];
const info = {
	two_way_mirror: 
		{name: 'Smart Mirror', image: 'src/images/two_way_mirror.png',
			description: 'A smart mirror that displays the current time and weather.',
			labels: [['Hardware', 'Raspberry Pi', 'disk outline'], ['Language', 'Processing', 'code']],
			extra: 'Completed: Dec 2016'},
	bluefruit_led_clock:
		{name: 'BlueFruit LED Clock', image: 'src/images/logo_small.png',
			description: 'A bluetooth low energy enabled LED clock.',
			labels: [['Hardware', 'BlueFruit', 'disk outline'], ['Language', 'C++', 'code']],
			extra: 'In Progress'},
	robo_ops:
		{name: 'NASA Robo-Ops', image: 'src/images/robo_ops.png',
			description: 'A networked sensor system with dashboard for NASA\'s telerobotic rover competition.',
			labels: [['Hardware', 'Raspberry Pi', 'disk outline'], ['Language', 'Python | C | JavaScript', 'code']],
			extra: 'Completed: May 2016'},
	lsb_stego:
		{name: 'LSB Stego', image: 'src/images/spy.png',
			description: 'Simple least significant bit image stegonagraphy encryption and decryption.',
			labels: [['Language', 'Java', 'code']],
			extra: 'Completed: May 2016'},
};

export default class App extends React.Component {

	constructor(props) {
		super(props);
	};

	getLabels(list) {
		var labels = [];
		list.forEach(function(item, index) {
			labels.push(
				<Label key={index}>
					<Icon name={item[2]} />
					{item[0]}
					<Label.Detail>{item[1]}</Label.Detail>
				</Label>);
		});
		return labels;
	};

	getAllProjects() {
		var list = [];
		projects.forEach(function(item, index) {
			var labels = this.getLabels(info[item]['labels']);
			list.push(
				<Item.Group style={{paddingBottom:'20px'}} key={index}>
					<Item>
						<Segment as={Link} id='projecthead' style={{padding:'1px'}}>
							<Item.Image size='small' src={info[item]['image']}/>
						</Segment>
						<Item.Content style={{paddingLeft:'20px'}}>
							<Item.Header style={{color:'white'}}>{info[item]['name']}</Item.Header>
							<Item.Meta style={{color:'grey'}}>Description</Item.Meta>
							<Item.Description style={{color:'white'}}>
								{info[item]['description']}
							</Item.Description>
							<Item.Extra style={{color:'grey'}}>{info[item]['extra']}</Item.Extra>
						</Item.Content>
					</Item>
					{labels}
			</Item.Group>);
		}.bind(this));
		return list;
	};

	render() {
		return <div>
			<Navbar active='Projects'/>
			<div style={{paddingTop:'100px'}}>
			<Grid columns={3}>
				<Grid.Column width={4}/>
				<Grid.Column width={10}>
				{this.getAllProjects()}
				</Grid.Column>
				<Grid.Column width={4}/>
			</Grid>
			</div>
		</div>	
	};
}
