import React, { Component } from 'react';
import FormControl from "./FormControl";

class FormControlWrapper extends React.Component {
    state = {
        numWrapper: 0
    };

    render() {
        const wrappers = [];

        for (let i = 0; i < this.state.numWrapper; i += 1) {
            wrappers.push(<ParentWrapper key={i} number={i} />);
        }

        return (
            <ParentWrapper addFormControl={this.onAddFormControlWrapper}>{wrappers}</ParentWrapper>
        );
    }

    onAddFormControlWrapper = () => {
        this.setState({
            numWrapper: this.state.numWrapper + 1
        });
    };
}

const ParentWrapper = props => (
    <div className="form-group">
        <FormControl/>
        <a className="btn btn-md btn-outline-success mt-2 mb-2"
           onClick={props.addFormControl}>+</a>
        <div>{props.children}</div>
    </div>
);

export default FormControlWrapper;