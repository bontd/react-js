import React from 'react';
import Listitem from './Listitem';

class Simpleview extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sides: []
        };
    }
    componentDidMount(){
        this.setState({sides: [
            {id: 1,title:'abc 1',image: 'http://www.croop.cl/UI/twitter/images/up-doug-talking-dog.jpg'},
            {id: 2,title:'abc 2',image: 'http://www.croop.cl/UI/twitter/images/russel.jpg'},
            {id: 3,title:'abc 3',image: 'http://www.croop.cl/UI/twitter/images/carl.jpg'}
        ]});
    }
    render(){
        return (
            <div>
                <label>{this.props.title}</label>
                <Listitem  sides={this.state.sides}/>
            </div>
        )
    }
}

export default Simpleview;