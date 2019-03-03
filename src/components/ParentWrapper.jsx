import React, { Component } from 'react';
import FormControl from "./FormControl";

const ParentWrapper = props => (
    <div className="form-group">
        <div className="row no-gutters p-3">
            <div className="col-lg-2">
                <FormControl />
            </div>
            <div className="col-lg-3">
                <button type="button" className="btn btn-sm btn-outline-danger ml-1 mr-1" onClick={props.removeFormControl}>-</button>
                <button type="button" className="btn btn-sm btn-outline-success ml-1 mr-1">+</button>
            </div>
        </div>
        <div className="row no-gutters">
            <button className="btn btn-md btn-outline-success mt-2 mb-2 ml-3" onClick={() => this.onAddItem}>+</button>
        </div>
    </div>
);

export default ParentWrapper;