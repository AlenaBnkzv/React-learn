import React, { Component } from 'react';
import FormControl from "./FormControl";

class FormControlWrapper extends React.Component {
    state = {
        numWrapper: 1
    };

    onAddFormControlWrapper = () => {
        const { numWrapper } = this.state;
        this.setState({
            numWrapper: numWrapper + 1
        });
    };

    render() {
         const wrappers = [];

         for (let i = 0; i < this.state.numWrapper; i += 1) {
             wrappers.push(<ParentWrapper key={i} number={i} addFormControl={this.onAddFormControlWrapper} />);
         }

         return (
             <div>{wrappers}</div>
         );
    }
}

const ParentWrapper = props => (
    <div className="form-group">
        <FormControl />
        <button className="btn btn-md btn-outline-success mt-2 mb-2" onClick={props.addFormControl}>+</button>
        <div>{props.children}</div>
    </div>
);

export default FormControlWrapper;