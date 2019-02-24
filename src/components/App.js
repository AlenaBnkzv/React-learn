import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from './Header';
import AppContent from './AppContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AppContent/>
      </div>
    );
  }
}

export default App;
