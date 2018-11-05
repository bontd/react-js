import React from 'react';
import axios from 'axios';
import Tableside from './Sidebar';
import Simpleview from './Simpleview';
import Other from './news/other';

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
            <div className="container pd-top-100">
                <div className="row">
                    <div className="col-md-9">
                        <h5 className="card-title"><b>{this.state.sides.title}</b></h5>
                        <p><b>{this.state.sides.description}</b></p>
                        <div dangerouslySetInnerHTML={{ __html: this.state.sides.content }} />
                        <div className="new-other">
                            <div className="title"><span>Bài viết khác</span></div>
                            <Other />
                        </div>
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