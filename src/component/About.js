import React from 'react';
import axios from 'axios';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: false,
            text: "Top All Time",
            url: "recent"
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        if (this.state.val === false) {
            this.setState({
                val: true,
                text: "Top Recent",
                url: "alltime"
            });
        } else {
            this.setState({
                val: false,
                text: "Top All Time",
                url: "recent"
            });
        }
    }
    render() {
        return (
            <div>
                <div className="text-center">
                    <button onClick={this.toggle} type="button" className="btn switch">{this.state.text}</button>
                </div>
                {!this.state.val&&<TableData url="recent" />}
                {this.state.val&&<TableData url="alltime" />}
            </div>
        );
    }
}

export default Toggle;

class User extends React.Component {
    render() {
        return (
            <tr>
                <td className="text-center">{this.props.number}</td>
                <td>
                    <a href={"https://www.freecodecamp.com/"+this.props.username} target="_blank">
                        <img height="40" width="40" src={this.props.img} />{this.props.username}</a>
                </td>
                <td className="text-center">{this.props.recent}</td>
                <td className="text-center">{this.props.alltime}</td>
            </tr>
        );
    }
}

class UserData extends React.Component {
    render() {
        var count = 0;
        const data = this.props.users;
        const display = data.map(user => {
            count++;
            return (
                <User
                    key={user.username}
                    number={count}
                    img={user.img}
                    username={user.username}
                    alltime={user.alltime}
                    recent={user.recent}
                />
            );
        });
        return (
            <table className="table table-striped table-inverse">
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Points in Past 30 days</th>
                    <th>All time points</th>
                </tr>
                </thead>
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
    componentWillMount() {
        axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/${this.props.url}`)
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(err => console.log(err));
    }
    render() {
        return this.state.users.length > 1 ? (
            <UserData users={this.state.users} />
        ) : null;
    }
}