import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="app-header navbar bg-dark border-bottom border-success">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-success" type="submit">Search</button>
                </form>
            </header>
        );
    }
}

export default Header;