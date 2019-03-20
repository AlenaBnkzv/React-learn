import React, { Component } from 'react';
import ParentWrapper from "./ParentWrapper";

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
        this.setState({
            numWrapper
        });
    };

    /*onAddItem = () => {
        const { numWrapper } = this.state;
        this.setState(state => {
            numWrapper: state.numWrapper.concat(state.numWrapper);

            return {numWrapper};
        });
    };*/

    render() {
         return (
           <div>
               {
               this.state.numWrapper.map((item, index) => {
                 return <ParentWrapper isLast={this.state.numWrapper.length - 1 === index} key={item} number={index} addFormControl={this.onAddFormControlWrapper} removeFormControl={this.onRemoveFormControlWrapper} />
                })
              }
           </div>
         );
    }
}

export default FormControlWrapper;