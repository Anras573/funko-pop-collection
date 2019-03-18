import React, { Component } from 'react';
import Fandom from './Fandom';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      fandoms: []
    };
  }

  componentDidMount() {
    fetch('data/funko.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          fandoms: json,
          isLoading: false
        });
      }); 
  }

  render() {
    let content;
    if (this.state.isLoading) {
      content = <div className="loader"></div>;
    } else {
      content = this.state.fandoms.map((fandom, index) => {
        return (
          <Fandom key={index} fandom={fandom} />
        );
      });
    }
    return (
      <main>
          {content}
      </main>
    );
  }
}

export default Main;
