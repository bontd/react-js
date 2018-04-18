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
            }}>X</a>
        </div>
    )
}

RemoveTodo = connect()(RemoveTodo);

export default RemoveTodo;