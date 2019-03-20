import React, { Component } from 'react';
import Pop from './Pop';
import './Fandom.css';

class Fandom extends Component {
  constructor(props) {
    super(props);

    this.state = {opened: true}
    this.handleClick = this.handleClick.bind(this);
  }

  comparePopNames(a, b) {
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

 

  handleClick(){
    this.setState(state => ({
      opened: !state.opened
    }));
  }

  render() {
    const fandom = this.props.fandom;
    const pops = fandom.pops.sort(this.comparePopNames).map((pop, index) => 
      <Pop key={index} pop={pop} />
    );
    const cardsClassName = this.state.opened ? "cards" : "cards hidden";
    const collapsibleClassName = this.state.opened ? "collapsible opened" : "collapsible closed";

    return (
      <div className="row">
        <button className={collapsibleClassName} onClick={this.handleClick}>{fandom.name}</button>
        <div className={cardsClassName}>
          {pops}
        </div>  
      </div>
    );
  };
}

export default Fandom;
