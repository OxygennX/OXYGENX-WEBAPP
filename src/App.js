import React  from "react";
import "./index.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";



import {Route, Routes} from "react-router-dom"
// import { Background } from "./components/Background";





function App() {

  return (
    <>
    
    <Routes>


      <Route path = "/" element= {<Home/>} />
      <Route path = "/about" element= {<About/>} />

      <Route path = "/project" element= {<Project/>}/> 
      
  

    </Routes>

    {/* <Background/> */}
    </>
  );
  
}

export default App;
