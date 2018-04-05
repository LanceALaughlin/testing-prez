import React, { Component } from 'react';

class Cart extends Component {
  state = {};

  calculatePrice = (cartData) => {
    let shipping = 10;
    let basePrice = cartData.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0);
    let priceWithTax = basePrice + (basePrice * .065);
    if(priceWithTax > 100){
      shipping = 0;
    }
    return priceWithTax + shipping;
  };

  render() {
    return <div>Cart</div>;
  }
}
 
export default Cart;