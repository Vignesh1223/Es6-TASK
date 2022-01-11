// Task 2 : From State, name and city should be displayed in Text box And Also in the div .....
 
import React from 'react';
import {useState} from 'react'

function Data()
{
  const [name,setName]=useState("");
  const [city,setCity]=useState("");
  function handleData(event)
  {
    event.preventDefault()
  console.log("NAME:",name)
  console.log("CITY:",city)
 /*console.log("Div",name+city) */
}
  return(
  <div>

    <form onSubmit={handleData}>
   <h1>Name</h1>
   <input name="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)} />
   <h1>City</h1>
   <input type="text" placeholder="Enter City" onChange={(event)=>setCity(event.target.value)}/><br></br><br></br>

   <button type="Display"> Display </button>
   
   </form>
   </div>
   );

}

export default Data;


