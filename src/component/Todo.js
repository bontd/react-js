import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RemoveTodo from '../containers/RemoveTodo';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state;
    }

    render() {
        return (
            <li className={this.props.completed ? 'disabled' : null}
            >
                <input
                    type="checkbox"
                    id={`checkbox-${this.props.id}`}
                    onClick={this.props.onClick}
                    checked={this.props.completed ? 'checked' : null}
                />
                <label htmlFor={`checkbox-${this.props.id}`} className="style-checkbox">
                    <span>
                        {this.props.completed ? <i className="fa fa-check"/> : null}
                    </span>
                </label>
                <span>{this.props.text}</span>
                <span className="pull-right icon-remover">
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