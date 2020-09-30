import React from 'react';
import './Pop.css';

function Pop(props) {
  const pop = props.pop;
  
  return (
    <div className="card">
      <img src={pop.image_url} loading="lazy" alt={pop.name}></img>
      <strong>{pop.name}</strong>
    </div>
  );
}

export default Pop;
