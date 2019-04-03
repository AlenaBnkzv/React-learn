import React, { Component } from 'react';

/**
 * Represents the button that adds wrappers for the first level.
 * @memberof FormControlInnerWrapper component
 * @class AddButton
 */
class AddButton extends React.Component {

    render() {
        return (
            <button className="btn btn-md btn-outline-success mt-2 mb-2 ml-3" onClick={() => this.props.addFormControl()}>+</button>
        );
    }
}

export default AddButton;
