import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class MyCong extends React.Component {
	handleClick(){
		alert(1);
	}
	render(){
		return(
			<div className="item-box-cong">
				<div className="text-title">
					<Link className="nav-link" to={{pathname: `/detail/${this.props.id}`}}>{this.props.title}</Link>
				</div>
				<div className="thubnail-img">
					<Link className="nav-link" to={{pathname: `/detail/${this.props.id}`}}><img src={this.props.image} alt="img "/></Link>
				</div>
			</div>
		)
	}
}

class CongMap extends React.Component {
	render(){
		const data = this.props.news;
		const map = data.map(cong => {
			return(
				<MyCong key={cong.id} id={cong.id} title={cong.title} image={cong.image} />
			)
		})
		return(
			<div className="box-cong">
				{map}
			</div>
		)
	}
}

class AxiosData extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			news: []
		}
	}
	componentDidMount(){
		axios.get('http://192.168.2.79/room/hotcong')
			.then(response => {
				this.setState({news: response.data});
			})
			.catch(err => console.log(err));
	}
	render(){
		return(
			<CongMap news={this.state.news} />
		)
	}
}

export default AxiosData;