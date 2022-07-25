import React from 'react'
import "./AboutOne.css"
// import {Link} from "react-router-dom";

import earth from "D:/start-up/OxygennX/oxygenx-webapp/src/images/earth.gif";

const AboutOne = () => {
  return (
    // <div>AboutOne</div>

    

    <div className="firstZero">
        <h1 className="h1">About Us.</h1>

        <div className="earth">
          <img src={earth} alt="earth"/>
        </div>

        <div className="firstabout">

        <p>OxygenX is a emerging brand that will save the World without any central needs.</p>
        <br/>
        <p>There is no PLANET B. The Planet you live-in is only the Planet to survive. But we are rigorously exploiting the Planet because we don't value it.</p>
        <br/>
        <p>Here we, Present you the OxygennX started by Yash Deharia, to solve the biggest REAL WORLD PROBLEM.</p>
        <br/>
        <p>That will give you the ownership of the nature -- That bring's Value to the Mother Nature.
        </p>

        </div>
    </div>
  )
}

export default AboutOne