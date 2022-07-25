import "./NavbarStyles.css"

import React, { useState } from "react";
  
import {Link} from "react-router-dom";

import{ FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {


    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



  return (

    <div className="header">
        <Link to = "/" >

           <h1>OxygenX</h1>
           <p className="live">.live</p>
        
        </Link>

       <ul className = {click ? "nav-menu active" : "nav-menu"}>
        {/* home */}
        <li>
            <Link to = "/">Home</Link>
        </li>
        {/* project */}
        <li>
            <Link to = "/project">Project</Link>
        </li>
        {/* About */}
        <li>
            <Link to = "/about">About</Link>
        </li>
       </ul>

       <div className="hamburger" onClick={handleClick}>

        {click ? ( <FaTimes size={20} style={{color: "#fff"}}/>):
        (<FaBars size={20} style={{color: "#fff"}}/>)}
         
         {/* FaTimes for closing tag
        <FaTimes size={20} style={{color: "#fff"}}/>
         {/* FaBars for open tag 
         <FaBars size={20} style={{color: "#fff"}}/> */}

       </div>
        
    </div>

  )
}

export default Navbar;