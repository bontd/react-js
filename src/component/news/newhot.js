import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class NewHost extends React.Component {
	render(){
		return (
			<div className="item-new-hot">
				<div className="thumbnail-new-stream">
					<img src={this.props.image} alt="img "/>
				</div>
				<div className="text-new-stream">
					<h4>
						<Link className="nav-link" to={{pathname: `/detail/${this.props.id}`}}>{this.props.title}</Link>
					</h4>
				</div>
			</div>
		)
	}
}

class Hotnews extends React.Component {
	render(){
		const data = this.props.news
		console.log(data);
		const valueaxios = data.map(newhot => {
			return (
				<NewHost key={newhot.id} id={newhot.id} title={newhot.title} description={newhot.description} image={newhot.image} />
			)
		})
		return(
			<div className="new-hot">
				{valueaxios}
			</div>
		)
	}
}

class axiosData extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			news: []
		}
	}
	componentDidMount(){
        axios.get('http://192.168.2.50/room/hotnew')
            .then(response => {
                this.setState({news: response.data});
            })
            .catch(err => console.log(err));
    }
	render(){
		return(
			<Hotnews news={this.state.news} />	
		)
	}
}

export default axiosData;