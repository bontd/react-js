import React from 'react';
import axios from 'axios';

class User extends React.Component{
    render(){
        return (
            <tr>
                <td className="text-center">{this.props.number}</td>
                <td>{this.props.name}</td>
                <td className="text-center">{this.props.email}</td>
            </tr>
        )
    }
}

class UserData extends React.Component {
    render() {
        var count = 0;
        const data = this.props.users;
        const display = data.map(user => {
            count++;
            return(
                <User
                    key={user.id}
                    number={count}
                    name={user.name}
                    email={user.email}
                />
            );
        });
        return (
            <table className="table">
                <tbody>{display}</tbody>
            </table>
        );
    }
}

class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost/room/')
            .then(response => {
                this.setState({users: response.data});
            })
                .catch(err => console.log(err));
    }

    render(){
        return(
            <UserData users={this.state.users} />
        )
    }
}

export default TableData;