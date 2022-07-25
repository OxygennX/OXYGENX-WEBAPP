import React from 'react'

import "./FirstStyles.css"

import {Link} from "react-router-dom";

const Firstpage = () => {
  return (
    <div className="first">
        <div className="content">

            <div className='live'>

            <p >Join the Change</p>
            <h1><span>Join</span> Oxy<span className='two'>genX.</span></h1>

            </div>

            <Link to="/project" className="btn">
                Get Now!
            </Link>
            <Link to="/About" className="btn">
                About Us.
            </Link>

        </div>

        <div>
           
        </div>
    </div>
  )
}

export default Firstpage