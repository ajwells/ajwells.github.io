import React from 'react';
import { Icon, Divider, Label, Item, Image, Segment } from 'semantic-ui-react';
import {Link} from 'react-router';
import Navbar from './components/navbar.js';

const projects = ['two_way_mirror', 'test'];
const info = {
	two_way_mirror: 
		{name: 'Two Way Mirror', image: 'src/images/two_way_mirror.png',
			description: 'A two way mirror that displays the current time and weather.',
			labels: [['Hardware', 'Raspberry Pi', 'disk outline'], ['Language', 'Processing', 'code']],
			extra: 'Completed: 12/25/2016'},
	test:
		{name: 'BlueFruit LED Clock', image: 'src/images/logo_small.png',
			description: 'A bluetooth low energy enabled LED clock.',
			labels: [['Hardware', 'BlueFruit', 'disk outline'], ['Language', 'C++', 'code']],
			extra: 'In Progress'},
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
			<div style={{paddingLeft:'100px', paddingTop:'100px'}}>
				{this.getAllProjects()}
			</div>
		</div>	
	};
}
