import React from 'react';
import './Pop.css';

function Pop(props) {
  const pop = props.pop;
  return (
    <div className="card">
        <img src={pop.image_url} alt={pop.name}></img>
        <strong>
        {pop.name}
        </strong>
    </div>
  );
}

export default Pop;


// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%">
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>