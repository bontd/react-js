import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class OtherItem extends React.Component {
	render(){
		return(
			<div className="col-md-4 iterm-other">
				<img src={this.props.image} />
				<h4 style={{fontSize:14}}>
					<Link to={{pathname: `/detail/${this.props.id}`}}>{this.props.title.substring(0, 50)}...</Link>
				</h4>
			</div>
		)
	}
}

class OtherMap extends React.Component {
	render(){
		const data = this.props.news;
		const mapOther = data.map(other => {
			return(
				<OtherItem key={other.id} title={other.title} image={other.image} />
			)
		})
		return(
			<div className="row">
				{mapOther}
			</div>
		)
	}
}

class OtherData extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			news: []
		}
	}
	componentDidMount(){
		axios.get('http://192.168.2.79/room/')
			.then(response => {
				this.setState({news: response.data});
			})
			.catch(err => console.log(err));
	}
	render(){
		return(
			<div>
				<OtherMap news={this.state.news} />
			</div>
		)
	}
}
export default OtherData;