import React, { Component } from 'react';
import { Container, Menu } from "semantic-ui-react";
import './App.css';
import ProductMenu from './components/product-menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crypto $tore</h1>
        </header>
        <Container className="container">
          <ProductMenu />
        </Container>
      </div>
    );
  }
}

export default App;
