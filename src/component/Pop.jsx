import React from 'react'
import "./pop.css";
function Pop({closepop}) {


  

  




  return (
    <>


    <div className='wrapper'  onClick={closepop} ></div>

    <div className='pop12'>

      <div id="pop1">
        <h4>Are you sure the ticket is resolved?</h4>
      </div>
      
      <div id ="pop2">
         <button type="submit" id="btn01">Yes</button>
         <button type="submit" id="btn02" >No</button>
      </div>
         
    </div>

    </>
  )
}

export default Pop
