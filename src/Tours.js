import React from 'react';
import Tour from './Tour';
const Tours = ({tours,remove}) => {
  return (
  <section>

  <div className="title">
    <h2>our tours</h2>
    <div className="underline"/>
  </div>
<div>
{tours.map((tour)=>
{
  return <Tour key={tour.id}{...tour} remove={remove}>

  </Tour>
  
})}
  </div>

  </section>
  )
};

export default Tours;
