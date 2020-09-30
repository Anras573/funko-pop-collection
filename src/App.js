import React, { Component } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
