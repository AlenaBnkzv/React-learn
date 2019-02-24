import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="app-nav bg-dark justify-content-center align-items-center d-flex">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/content'>Content</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/formControl'>Inputs</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;