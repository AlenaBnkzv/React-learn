import React, { Component } from 'react';
import FormControlInnerWrapper from "./FormControlInnerWrapper";

class FormControlWrapper extends React.Component {
    counter = 0;
    state = {
        numWrapper: [this.counter]
    };

    onAddFormControlWrapper = () => {
        const { numWrapper } = this.state;
        this.counter = ++this.counter;
        numWrapper.push(this.counter);
        this.setState({
            numWrapper
        });
    };

    onRemoveFormControlWrapper = (index) => {
        const { numWrapper } = this.state;
        numWrapper.splice(index, 1);
        if (!numWrapper.length) {
          this.props.f1();
        }
        this.setState({
            numWrapper
        });
    };

    render() {
        return (
            <div>
                {
                    this.state.numWrapper.map((item, index) => {
                        return <FormControlInnerWrapper isFirst={this.state.numWrapper.length  > 1 ? false : this.props.isFirst} isLast={this.state.numWrapper.length - 1 === index} key={item} number={index} addFormControl={this.onAddFormControlWrapper} removeFormControl={(index)=>this.onRemoveFormControlWrapper(index)} />
                    })
                }
            </div>
        );
    }
}

FormControlWrapper.defaultProps = {
    isFirst: true,
}

export default FormControlWrapper;