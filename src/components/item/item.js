import React, { Component } from 'react';

class Item extends Component {
  state = {}

  calculateItemTotal = (fieldData) => {
    const { price, quantity = 1} = fieldData;
    return price * quantity;
  }

  render() { 
    return (
      <div>Item</div>
    )
  }
}
 
export default Item;