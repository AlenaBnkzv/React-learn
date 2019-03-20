import React, { Component } from 'react';

class AddButton extends React.Component {

    render() {
        return (
            <button className="btn btn-md btn-outline-success mt-2 mb-2 ml-3" onClick={() => this.props.addFormControl()}>+</button>
        );
    }
}

export default AddButton;
