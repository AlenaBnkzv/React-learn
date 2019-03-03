import React, { Component } from 'react';
import ParentWrapper from "./ParentWrapper";

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

    onRemoveFormControlWrapper = () => {
        const { numWrapper } = this.state;
        this.setState({
            numWrapper: numWrapper - 1
        });
    };

    onAddItem = () => {
        const { numWrapper } = this.state;
        this.setState(state => {
            numWrapper: state.numWrapper.concat(state.numWrapper);

            return {numWrapper};
        });
    };

    render() {
        const wrappers = [];
         return (
           <div>
               {
                wrappers.map((item, index) => {
                    return <ParentWrapper key={item} number={index} addFormControl={this.onAddFormControlWrapper} removeFormControl={this.onRemoveFormControlWrapper} />
                })
              }
           </div>
         );
    }
}

export default FormControlWrapper;