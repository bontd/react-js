import React from 'react';
import axios from 'axios';
import Tableside from './Sidebar';
import Simpleview from './Simpleview';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sides: []
        };
    }

    componentDidMount(){
    	const url = window.location.pathname;
        axios.get('http://192.168.2.50/room/'+url)
            .then(response => {
                this.setState({sides: response.data});
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div className="container pd-top-80">
                <div className="row">
                    <div className="col-md-9">
                        <h5 className="card-title">{this.state.sides.title}</h5>
                        <p><b>{this.state.sides.description}</b></p>
                        <div dangerouslySetInnerHTML={{ __html: this.state.sides.content }} />
                    </div>
                    <div className="col-md-3">
                        <Simpleview title="News"/>
                        <Tableside title="Top View"/>
                    </div>
                </div>
            </div>
        )
    }
}



export default Detail;