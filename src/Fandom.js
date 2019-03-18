import React from 'react';
import Pop from './Pop';
import './Fandom.css';

function Fandom(props) {
  function comparePopNames(a, b) {
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

  const fandom = props.fandom;
  const pops = fandom.pops.sort(comparePopNames).map((pop, index) => 
      <Pop key={index} pop={pop} />
  );
  return (
    <div className="row">
      <strong>{fandom.name}</strong>
      <div className="cards">
        {pops}
      </div>  
    </div>
  );
}

export default Fandom;
