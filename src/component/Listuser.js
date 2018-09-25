import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1, name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Ari', text: 'Me too!' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/carl.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 3, name: 'russel',
      avatar: "http://www.croop.cl/UI/twitter/images/russel.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 4,
      name: 'talking',
      avatar: "http://www.croop.cl/UI/twitter/images/up-doug-talking-dog.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
]

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activities: []
        }
    }
    componentDidMount(){
        const url = window.location.pathname;
        axios.get('http://bontd.local/room/product')
            .then(response => {
                this.setState({activities: response.data});
            })
            .catch(err => console.log(err));
    }
    render(){
        return(
            <div>
                <Listproduct activities={this.state.activities} />
            </div>
        )
    }
}

class Listproduct extends React.Component {
    render() {
        const getdata = this.props.activities;
        const dataSide = getdata.map(activity => {
            return(
                <ActivityItem key={activity.id} id={activity.id} name={activity.name} img={activity.image} user={activity.user} text={activity.text} />
            )
        });
        return (
            <div className="row">
                {dataSide}
            </div>
        );
    }
};

class ActivityItem extends React.Component {
    render(){
        const {activity} = this.props;

        return (
            <div className="col-md-3">
                <div className="list-item">
                    <figure>
                        <img src={this.props.img} />
                    </figure>
                    <figcaption>
                        <Link className="nav-link" to={{pathname: `/productdetail/${this.props.id}`}}>{this.props.name}</Link>
                        <p>{this.props.text}</p>
                        {this.props.user}
                    </figcaption>
                </div>
            </div>
        )
    }
}

export default Content;
