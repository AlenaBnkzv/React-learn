import React, { Component } from 'react';
// unused
// add whitespaces (depends on codestyle), not mixed!!!
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="app-nav bg-dark justify-content-center align-items-center d-flex">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/formControl'>Form controls</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;