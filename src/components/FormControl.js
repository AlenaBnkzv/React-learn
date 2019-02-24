import React, { Component } from 'react';

class FormControl extends Component {
    render (){
        return (
            <div className="form-group">
                <div className="p-3">
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
                </div>
            </div>
        );
    }
}

export default FormControl;