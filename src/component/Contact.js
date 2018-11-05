import React from 'react';
import axios from 'axios';
import Tableside from './Sidebar';
import Simpleview from './Simpleview';
import Content from './Listuser';
import ListNew from './news/listnew';
import NewHot from './news/newhot';
import MyCong from './news/cong';
import {Link} from 'react-router-dom';
import Timer from './Timer/Timer';


class New extends React.Component{
    render(){
        return (
            <div className="col-md-4">
                <div className="list-item">
                    <figure>
                        <Link className="nav-link" to={{pathname: `/detail/${this.props.id}`}}><img src={this.props.image} alt="img "/></Link>
                        <figcaption>
                            <h4>
                                <Link className="nav-link" to={{pathname: `/detail/${this.props.id}`}}>{this.props.title}</Link>
                            </h4>
                            <p className="description">{this.props.description}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}

class NewData extends React.Component {
    render() {
        const data = this.props.news;
        const display = data.map(newr => {
            return(
                <New
                    key={newr.id}
                    id={newr.id}
                    title={newr.title}
                    description={newr.description}
                    image={newr.image}
                />
            );
        });
        return (
            <div className="container pd-top-100">
                <div className="row">
                    <div className="col-md-9">
                        <div className="box-user row">
                            {display}
                        </div>
                        <hr className="hr"></hr>
                        <ListNew />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="title"><span>HOT NEWS</span></div>
                                <NewHot />
                            </div>
                            <div className="col-md-6 bg-gray">
                                <div className="title"><span>C<span className="color-red">+</span>NG</span></div>
                                <MyCong />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Tableside title="Top View"/>
                        <Simpleview title="News"/>
                        <Timer />
                    </div>
                </div>
            </div>
        );
    }
}

class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
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
            <NewData news={this.state.news} />
        )
    }
}


export default TableData;