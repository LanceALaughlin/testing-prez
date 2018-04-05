import React from 'react';
import { shallow } from 'enzyme';
import Cart from './cart';

describe("<Cart />", () => {
  const cart = shallow(<Cart />);
  it('should render', () => {
    expect(cart).toMatchSnapshot();
  });
  it('should calculate price with tax & shipping', () => {
     const cartData = { items:[
       { name: "Home Alone 2", price: 10, quantity: 2 },
       { name: "Fresh Price Season 2", price: 30 }],
      state: "MA"};
     expect(cart.instance().calculatePrice(cartData)).toBe(63.25);
  });

  it('should calculate price with tax and free shipping for order over $100', () => {
     const cartData = { items:[
       { name: "Home Alone 2", price: 10, quantity: 20 },
       { name: "Fresh Price Season 2", price: 30 }],
      state: "MA"};
     expect(cart.instance().calculatePrice(cartData)).toBe(244.95);
  });

})