import React, { Component } from 'react';
// unused!!!!
import Header from './Header';
import AppContent from './AppContent';

class App extends Component {
  // whitespace before />
  render() {
    return (
      <div className="App">
        <Header />
        <AppContent />
      </div>
    );
  }
}

export default App;
