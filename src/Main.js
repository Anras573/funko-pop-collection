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

  compareFandomNames(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;

    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }

    return comparison;
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
      let fandoms = json.sort(this.compareFandomNames);

      this.setState({
        fandoms: fandoms,
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
