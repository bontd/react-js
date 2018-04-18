import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import AppNav from '../App';

const App = () => (
    <div className="container-fluid">
        <AppNav />
        <div className="container">
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    </div>
)

export default App;