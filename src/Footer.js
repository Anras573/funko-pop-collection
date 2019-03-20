import React, { Component } from 'react';
import logo from './logo.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={logo} className="react-logo" alt="logo" />
        <span>Made with react</span>
      </footer>
    );
  }
}

export default Footer;
