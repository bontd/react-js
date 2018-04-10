import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sliderbar from './left/Sliderbar';

class About extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newFriend: 'james',
            friends: [
                'luccy',
                'nancy'
            ],
        }

        this.addFriend = this.addFriend.bind(this)
    }

    addFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-2 col-md-3">
                    <Sliderbar />
                </div>
                <div className=" col-lg-10 col-md-9">
                    <h2>About</h2>
                    <h3>Name: {this.state.newFriend}</h3>
                    <AddFiend addNew={this.addFriend} />
                    <ShowList names={this.state.friends} />
                    <AppContrainer />
                    <AppList />
                    <Title header="Header form props..." content="Content form props..."/>
                    <Increment />
                    <Refs />
                </div>
            </div>
        );
    }
}

class AppList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    'id': 1,
                    'name': 'Foo',
                    'age': 20
                },
                {
                    'id': 2,
                    'name': 'Bar',
                    'age': 23
                },
                {
                    'id': 3,
                    'name': 'Baz',
                    'age': 28
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}

class Title extends React.Component {
    // constructor(props) {
    //     super(props)
    //
    //     this.state ={
    //         header: 'header form state...',
    //         content: 'Content form state...'
    //     }
    // }
    render(){
        return(
            <div>
                <h1>{this.props.header}</h1>
                <h3>{this.props.content}</h3>
            </div>
        )
    }
}

class AppContrainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            username: 'shang'
        }

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.username}</h1>
                <div>Change name:
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

class AddFiend extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newFriend: 'James'
        }

        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }

    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }

    handleAddNew() {
        this.props.addNew(this.state.newFriend)
        this.setState({
            newFriend: ''
        })
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    value={this.state.newFriend}
                    onChange={this.updateNewFriend}
                />
                <button onClick={this.handleAddNew}>Add</button>
            </div>
        )
    }
}

class ShowList extends React.Component {
    render() {
        return(
            <div>
                <h3> Friends </h3>
                <ul>
                    {this.props.names.map((friend) => {
                        return <li> {friend} </li>
                    })}
                </ul>
            </div>
        )
    }
}

class Increment extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 0
        }

        this.setNewNumber = this.setNewNumber.bind(this)
    }

    setNewNumber(){
        this.setState({data: this.state.data + 1})
    }

    render() {
        return(
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        )
    }
}

class Content extends React.Component {
    componentWillMount() {
        console.log('Component Will Mount')
    }

    componentDidMount() {
        console.log('Component Did Mount')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component Will Receive Props')
    }

    shouldComponentUpdate(newProps,newState) {
        return true;
    }

    componentWillUpdate(nextProps,NextState) {
        console.log('Component Will Update')
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('Component Did update')
    }

    componentWillUnmount() {
        console.log('Component Will Unmount')
    }

    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}

class Refs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ''
        }

        this.updateState = this.updateState.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }
    updateState(e){
        this.setState({data: e.target.value});
    }
    clearInput(){
        this.setState({data:''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.data} onChange={this.updateState} ref="myInput"></input>
                <button onClick={this.clearInput}>Clear</button>
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}
export default About;