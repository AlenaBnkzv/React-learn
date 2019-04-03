import React, { Component } from 'react';
import FormControlInnerWrapper from "./FormControlInnerWrapper";

/**
 * Represents a main wrapper.
 *
 * @class FormControlWrapper
 *
 */
class FormControlWrapper extends React.Component {
    counter = 0;
    state = {
        numWrapper: [this.counter]
    };

    /**
     * Adds wrappers
     *
     */
    onAddFormControlWrapper = () => {
        const { numWrapper } = this.state;
        this.counter = ++this.counter;
        numWrapper.push(this.counter);
        this.setState({
            numWrapper
        });
    };

    /**
     * Deletes wrappers
     *
     * @prop {Bool} resetChildren - defines if the wrapper includes child wrappers
     */
    onRemoveFormControlWrapper = (index) => {
        const { numWrapper } = this.state;
        numWrapper.splice(index, 1);
        if (!numWrapper.length) {
          this.props.defineChildWrappers();
        }
        this.setState({
            numWrapper
        });
    };

    /**
     * Renders the child component FormControlInnerWrapper .
     *
     * @prop {Bool} isFirst - defines if the element is first in array default value is true
     * @prop {Number} isLast - defines the last element in array
     * @prop {Func} addFormControl - adds wrappers
     * @prop {Func} removeFormControl - deletes wrappers by index
     */
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