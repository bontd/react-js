import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions';

let RemoveTodo = ({id, dispatch}) => {
    return (
        <div>
            <a onClick={ e => {
                e.preventDefault()
                dispatch(deleteTodo(id))
                console.log(dispatch(deleteTodo()));
            }}>
                <i className="fa fa-times"></i>
            </a>
        </div>
    )
}

RemoveTodo = connect()(RemoveTodo);

export default RemoveTodo;