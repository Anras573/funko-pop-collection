import React, { Component } from 'react';
import SortByName from '../../Utilities/SortHelper';
import Pop from './Pop';
import './Fandom.css';

class Fandom extends Component {
  constructor(props) {
    super(props);

    this.state = { opened: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      opened: !state.opened
    }));
  }

  render() {
    const fandom = this.props.fandom;
    const pops = fandom.pops.sort(SortByName).map((pop, index) => 
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
