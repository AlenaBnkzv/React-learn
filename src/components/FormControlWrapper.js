// unused
import React from 'react';
import FormControl from "./FormControl";

class FormControlWrapper extends React.Component {
    state = {
		// set to 1
        numWrapper: 1
    };

    onAddFormControlWrapper = () => {
	  console.log('onAddFormControlWrapper')
		// user es6 features (destructuring)
		const { numWrapper } = this.state;
        this.setState({
            numWrapper: numWrapper + 1
        });
	};

	// render always in the end
	render() {
		const wrappers = [];

		for (let i = 0; i < this.state.numWrapper; i += 1) {
			// missed addFormControl prop
			wrappers.push(<ParentWrapper key={i} number={i} addFormControl={this.onAddFormControlWrapper} />);
		}

		return (
			// div is enough
			<div>{wrappers}</div>
		);
	}
}

// to separate component!
const ParentWrapper = props => (
	// layout
	// def length 120 symbols
  	// whitespace before />
    <div className="form-group">
        <FormControl />
		<button className="btn btn-md btn-outline-success mt-2 mb-2" onClick={props.addFormControl}>+</button>
        <div>{props.children}</div>
    </div>
);

export default FormControlWrapper;