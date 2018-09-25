import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Stream extends React.Component {
	render(){
		return (
			<div className="new-stream">
				<div className="thumbnail-new-stream">
					<img src={this.props.image} alt="img "/>
				</div>
				<div className="text-new-stream">
					<h4>
						<Link className="nav-link" to={{pathname: `/detail/${this.props.id}`}}>{this.props.title}</Link>
					</h4>
					<i className="st-icon-pandora">1 giờ trước</i>
					<p className="description">{this.props.description}</p>
				</div>
			</div>
		)
	}
}

class NewstreamData extends React.Component {
    render() {
        const data = this.props.news;
        const setdata = data.map(newr => {
            return(
                <Stream
                    key={newr.id}
                    id={newr.id}
                    title={newr.title}
                    description={newr.description}
                    image={newr.image}
                />
            );
        });
        return (
            <div>
                {setdata}
            </div>
        );
    }
}

class ListNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount(){
        axios.get('http://192.168.2.50/room/limit')
            .then(response => {
                this.setState({news: response.data});
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <NewstreamData news={this.state.news} />
        )
    }
}

export default ListNew;