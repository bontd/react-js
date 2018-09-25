import React from 'react';
import axios from 'axios';
import Listitem from './Listitem';

class Tableside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sides: []
        };
    }

    componentDidMount(){
        axios.get('http://192.168.2.50/room/testapi')
            .then(response => {
                this.setState({sides: response.data});
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <label>{this.props.title}</label>
                <Listitem sides={this.state.sides} />
            </div>
        )
    }
}

export default Tableside;