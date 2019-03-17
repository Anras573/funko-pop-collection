import React from 'react';
import Pop from './Pop';
import './Fandom.css';

function Fandom(props) {
  const fandom = props.fandom;
  const pops = fandom.pops.map((pop, index) => 
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
