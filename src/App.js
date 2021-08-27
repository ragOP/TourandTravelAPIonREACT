import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState([])

const remove= (id)=>
{
  const newTour=tours.filter((tour)=>tour.id!==id)
  setTours(newTour)
 
}
const fetchTours=async ()=>{
  setLoading(true)

  try {
    const response=await fetch(url);
    const tours =await response.json();
    setLoading(false)
    setTours(tours)
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
 
  
}

useEffect(()=>{
fetchTours();
},[])


  if(loading)
  {
    return <main>
      <Loading/>
      {tours}
    </main>
    
  }
if(tours.length===0)
{
  return <main>
  <h2>No tours left</h2>
<button className="btn" onClick={fetchTours}>refresh</button>

  </main>
}
  return <main>
    <Tours tours={tours} remove={remove}/>
    </main>

}
export default App;
