import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import rootReducer from './reducers';
import App from './component/App';
import nav from './App';
import About from './component/About';

// var store = require('./examples.js');

const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <div>
            <Route path="/" component={nav} />
            <Route path="/home" component={App} />
            <Route path="/about" component={About} />
        </div>
    </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);