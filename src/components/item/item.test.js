import React from "react";
import { shallow } from 'enzyme';
import Item from './item';

describe("<Item />", () => {
  const item = shallow(<Item />);

  it('should render', () => {
    expect(item).toMatchSnapshot();
  });

  it("should calculate item price with quantity", () => {
    const itemData = { name: "Home Alone 2", price: 10, quantity: 20};
    expect(item.instance().calculateItemTotal(itemData)).toBe(200);
  });

  it("quantity to should default to 1 if not provided", () => {
    const itemData = { name: "Home Alone 2", price: 10 };
    expect(item.instance().calculateItemTotal(itemData)).toBe(10);
  });

});
