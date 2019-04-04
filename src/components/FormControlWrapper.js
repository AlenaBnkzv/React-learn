import React from 'react';
import PropTypes from 'prop-types';
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
        const {numWrapper} = this.state;
        this.counter = ++this.counter;
        numWrapper.push(this.counter);
        this.setState({
            numWrapper
        });
    };

    /**
     * Deletes wrappers
     *
     * @prop {Bool} defineChildWrappers - defines if the wrapper includes child wrappers
     */
    onRemoveFormControlWrapper = (index) => {
        const {numWrapper} = this.state;
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
        const {isFirst} = this.props;
        const {numWrapper} = this.state;

        return (
            <div>
                {
                    this.state.numWrapper.map((item, index) =>
                        <FormControlInnerWrapper
                            isFirst={numWrapper.length > 1 ? false : isFirst}
                            isLast={numWrapper.length - 1 === index}
                            key={item}
                            number={index}
                            addFormControl={this.onAddFormControlWrapper}
                            removeFormControl={(index) => this.onRemoveFormControlWrapper(index)}
                        />
                    )
                }
            </div>
        );
    }
}

FormControlWrapper.propTypes = {
    isFirst: PropTypes.bool,
    defineChildWrappers: PropTypes.func,
};

FormControlWrapper.defaultProps = {
    isFirst: true,
}

export default FormControlWrapper;