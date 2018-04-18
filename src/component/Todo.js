import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RemoveTodo from '../containers/RemoveTodo';

// const Todo = ({ onClick, completed, text }) => (
//     <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
//         <input type="checkbox" />{text}<button type="button" className="pull-right">×</button>
//     </li>
// )

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state;
    }

    render() {
        return (
            <li
                onClick={this.props.onClick}
            >
                <span>{this.props.text} {this.props.completed ? <i className="fa fa-check"/> : null}</span>
                <span className="pull-right">
                    <RemoveTodo id={this.props.id}/>
                </span>
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    // text: PropTypes.isRequired,
    // id: PropTypes.isRequired
}

export default Todo;