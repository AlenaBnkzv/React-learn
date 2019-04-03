import React, { Component } from 'react';
import FormControl from "./FormControlInput";
import FormControlWrapper from "./FormControlWrapper";
import AddButton from "./AddButton";

/**
 * Represents a child wrapper.
 *
 * @class FormControlInnerWrapper
 *
 */
class FormControlInnerWrapper extends React.Component {
    state = {
        empty: true
    }

    /**
     * Changes the visibility of adding child wrappers button
     *
     */
    toggleHidden = () => {
        this.setState({
          empty: false
        })
    }

    /**
     * Deletes wrappers besides the first
     *
     */
    removeFormControl = () => {
        if(!this.props.isFirst) {
            this.props.removeFormControl(this.props.number)
        }
    }

    /**
     * Defines if the main wrapper includes child wrappers
     *
     */
    defineChildWrappers = () => {
      this.setState({
        empty: true
      })
    }

    render() {
        return (
            <div className="form-group">
                <div className="row no-gutters p-3">
                    <div className="col-lg-2">
                        <FormControl />
                    </div>
                    <div className="col-lg-3">
                        <button type="button" className="btn btn-sm btn-outline-danger ml-1 mr-1" onClick={this.removeFormControl}>-</button>
                        {this.state.empty && <button type="button" className="btn btn-sm btn-outline-success ml-1 mr-1" onClick={() => this.toggleHidden()}>+</button>}
                    </div>
                </div>
                {
                    this.props.isLast &&
                    <div className="row no-gutters">
                        <AddButton addFormControl={this.props.addFormControl} />
                    </div>
                }
                <div className="ml-4">
                  {!this.state.empty && <FormControlWrapper defineChildWrappers={() => this.defineChildWrappers()} isFirst={false} />}
                </div>
            </div>
        );
    }
}

export default FormControlInnerWrapper;