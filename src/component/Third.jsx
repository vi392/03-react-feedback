import React, { useState } from 'react'
import "./third.css";
import { BsBell } from "react-icons/bs";
import Pop from './Pop'


function Third() {

  const[popper,setPopper] =useState(false)

  const poptab=()=>setPopper(true)
  const closepop=()=>setPopper(false)


  return (
    <>
    <div className="first">

    <section id="first">
          <h2>Feedback and Support</h2>
        </section>
        <div id="icon">
          <BsBell />
        </div>

        <section>
          Filter
          <select id="para1">
            <option hidden>--select--</option>
            <option>closed</option>
            <option>Inprocess</option>
            <option>open</option>
          </select>
          Sort
          <select id="para2">
            <option hidden>--select--</option>
            <option>creation Date</option>
            <option>Last Date</option>
          </select>
        </section>
    </div>
    <div className="firstpara">
    <div id="text">
        <p >Company Name</p>
        <h4>KrinviTech</h4>
        </div>

        <div id="text1">
        <p>Created On</p>
        <h4>03/02/2024</h4>
        </div>

        <div id="text2_1">
       <p>Status</p>
        <h4>
         Inprogress
        </h4>
       </div>

    </div>

   <div className='fourth'>
        
        <h4>Issue</h4>
        <p>Recently, I've encountered an unexpected log-out issue while using the Zestire platform. Despite being actively engaged in [mention the specific task or section you we<br></br> using, eg, "Resource Hire Cycle" or "Job Application'], the system unexpectedly logged me out. This interruption disrupts the user experience and requires re cuthentication<br></br> leading to potential data loss or inconvenience..</p>
   </div>
   
  <div id="one2_2">
  <p>Your comment</p><br></br>
  <input type="text" id="one"></input>

  </div> 

  <div id ="one2_3">
    
    <button type="submit" onClick={poptab}  >Update</button>  

    

    {popper && <Pop closepop={closepop} /> }
    
  </div>
    </>
  )
}

export default Third

