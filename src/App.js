import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      // BEM
      <div className="App">
        <h1>Amazon Clone</h1>
        <Header />
        {/* Home */}
      </div>
    );
  }
}

export default App;
