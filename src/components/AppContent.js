import React, { Component } from 'react';
// unused
// add whitespaces (depends on codestyle), not mixed!!!
import { BrowserRouter, Route } from 'react-router-dom';
import Text from './Text';
import Nav from "./Nav";
import FormControlWrapper from "./FormControlWrapper";
import Test from "./FormControlWrapper";

class AppContent extends Component {
  // whitespace before />
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