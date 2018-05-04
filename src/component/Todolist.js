import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import axios from 'axios';


class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost/room/').then(function(response){
            console.log(response.data);
        })
    }

    render(){
        const { todos, toggleTodo } = this.props;
        return (
            <ul className="list-todo">
                {todos.map(todo =>
                    <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
                )}
            </ul>
        )
    }
}


// const TodoList = ({ todos, toggleTodo}) => (
//     <ul className="list-todo">
//         {todos.map(todo =>
//             <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
//         )}
//     </ul>
// )

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

 export default TodoList;