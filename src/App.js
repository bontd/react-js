import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Header from './component/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid pd-0 fixed header">
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <ul>
                                <li>
                                    <Link to="/gamek">GAMEK</Link>
                                </li>
                                <li>
                                    <Link to="/about">TROLL</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            c<span className="cong-border"></span>ng
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/app">todo</Link>
                                </li>
                            </ul>
                            <div className="nav navbar-nav navbar-right">
                                <Header />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default App;


