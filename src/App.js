import React, { Component } from 'react';
import { Container, Menu } from "semantic-ui-react";
import './App.css';
import Form from './components/form/form';

class App extends Component {
  render() {
    const inventory = { name: "Fresh Prince", available: 6 }; 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Secret DVD Marketplace</h1>
        </header>
        <Container className="container">
          <Form inventory={inventory}/>
        </Container>
      </div>
    );
  }
}

export default App;
