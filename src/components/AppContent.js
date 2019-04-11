import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Text from './Text';
import Nav from "./Nav";
import FormControlWrapper from "./FormControlWrapper";
import Test from "./FormControlWrapper";

/**
 * Represents the content.
 * @memberof App component
 * @class AppContent
 */
class AppContent extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="row no-gutters">
                    <div className="col-lg-3">
                        <Nav/>
                    </div>
                    <div className="col-lg-9">
                        <div className="app-content bg-light">
                            <Route exact path="/" component={Text} />
                            <Route path="/formControl" component={FormControlWrapper} />
                            <Route path="/Test" component={Test} />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppContent;