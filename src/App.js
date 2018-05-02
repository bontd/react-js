import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item"><a href="" className="nav-link" data-toggle="modal"
                                                        data-target="#exampleModal"><span className="fa fa-user"></span>
                                Sign Up</a></li>
                            <li className="nav-item"><a href="" className="nav-link" data-toggle="modal"
                                                        data-target="#Login"><span className="fa fa-sign-in"></span>
                                Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default App;


