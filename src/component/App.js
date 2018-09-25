import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div className="container-fluid margin-top-20 pd-top-100">
        <div className="container">
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    </div>
)

export default App;