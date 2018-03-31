import React, { Component } from 'react';
import { Menu } from "semantic-ui-react";

class ProductMenu extends Component {
  state = { activeItem: "ripple" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      // <h2>This is a product</h2>
      <Menu secondary>
        <Menu.Item
          name="ripple"
          active={activeItem === "ripple"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="bitcoin"
          active={activeItem === "bitcoin"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="bitcoin-cash"
          active={activeItem === "bitcoin-cash"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
 
export default ProductMenu;