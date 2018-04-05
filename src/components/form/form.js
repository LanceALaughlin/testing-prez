import React, { Component } from 'react';

class Form extends Component {
  state = {
    value: "",
    disabled: false,
  }

  handleChange = (event) => {
    const { value } = event.target;
    let disabled = false
    if (value > this.props.inventory.available || value == "") {
      disabled = true;
    }
    this.setState({value: event.target.value, disabled});
  }

  render() { 
    return <div>
        <input id="input" val={this.state.value} onChange={this.handleChange} />
        <button id="button" disabled={this.state.disabled}>Add To Cart</button>
      </div>;
  }
}
 
export default Form;