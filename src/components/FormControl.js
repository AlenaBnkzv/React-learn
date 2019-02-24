import React, { Component } from 'react';

class FormControl extends Component {
    constructor() {
        super();
        this.state = {
            newFormGroup: 1
        };

        this.handleAddFormGroup = this.handleAddFormGroup.bind(this);
    }

    handleAddFormGroup() {
        this.setState ({
            newFormGroup: this.state.newFormGroup + 1
        })
    }

    render (){
        return (
            <div className="form-group p-3">
                <input
                    type="text"
                    className="form-control-sm"
                />
                <button
                    type="button"
                    className="btn btn-sm btn-outline-success ml-1 mr-1">+</button>
                <button
                    type="button"
                    className="btn btn-sm btn-outline-danger ml-1 mr-1">-</button>
                <div className="form-control-add-child">
                    <button
                        type="button"
                        className="btn btn-md btn-outline-success mt-2 mb-2"
                        onClick={() => this.state.handleAddFormGroup}>+</button>
                </div>
            </div>
        );
    }
}

export default FormControl;