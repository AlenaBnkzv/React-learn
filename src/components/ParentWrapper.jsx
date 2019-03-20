import React, { Component } from 'react';
import FormControl from "./FormControl";
import FormControlWrapper from "./FormControlWrapper";
import AddButton from "./AddButton";

class ParentWrapper extends React.Component {
    state = {
        isHidden: true,
        isShowPlusButton: true,
    }

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden,
            isShowPlusButton: false,
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
                        <button type="button" className="btn btn-sm btn-outline-danger ml-1 mr-1" onClick={() => this.props.removeFormControl(this.props.number)}>-</button>
                        {this.state.isShowPlusButton && <button type="button" className="btn btn-sm btn-outline-success ml-1 mr-1" onClick={() => this.toggleHidden()}>+</button>}
                    </div>
                </div>
                {
                    this.props.isLast &&
                    <div className="row no-gutters">
                        <AddButton addFormControl={this.props.addFormControl} />
                    </div>
                }
                <div className="ml-4">
                    {!this.state.isHidden && <FormControlWrapper />}
                </div>
            </div>
        );
    }
}

export default ParentWrapper;