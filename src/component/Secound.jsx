import React from "react";
import "./secound.css";
import { BsBell } from "react-icons/bs";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Secound() {
    const navigate = useNavigate();
    navigate("/view")
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

      <div className="third">
        <div id="text">
        <p >Company Name</p>
        <h4>KrinviTech</h4>
        </div>

        <div id="text1">
        <p>Created On</p>
        <h4>03/02/2024</h4>
        </div>

       <div id="text2">
       <p>Issue</p>
        <h4>
          Recently, I've encountered an <br></br>
          unexpected log-out issue<br></br>
          while View.
        </h4>
       </div>

       <div id="text3">
       <p>Last Date</p>
        <h4>This unexpected log-<br></br>
            out issue hampers<br></br>
            the seamless user<br></br>
            View.</h4>
       </div>

        <div id="text4">
        <p>Status</p>
        {/* <select id="para3">
        <option hidden>--select--</option>
            <option id="col1">closed</option>
            <option id="col2">Inprocess</option>
            <option id="col3">open</option>
          </select> */}
          <h4>closed</h4>
          
        </div>

       <div id="text5">
      
       <Link to="/view">
       <button id="btn">View</button>
       </Link>
       </div>
      </div>
    </>
  );
}

export default Secound;
