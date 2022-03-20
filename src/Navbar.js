import React, { useState } from 'react'
import "./Navbar.css"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [toggle, setToggle] = useState(true);
  return (
    <div className='nav'>
        <div className= {toggle? "nav_side" : "nav_side remove"}>
        <CloseIcon className='close' onClick={()=>{setToggle(false)}}/>
            <div className="nav_side_content">
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#work">Work</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
            
        </div>
        <div className= {toggle? "main" : "full_main"}>
        <div className="nav_top">
            <h1>
                Navbar
            </h1>
           <MenuIcon onClick={()=>{setToggle(true)}}/>
        </div>
            <div className="home" id="home">
               <h1>home</h1>
            </div>
            <div className="home" id="about">
               <h1>about</h1>
            </div>
            <div className="home" id="work">
               <h1>work</h1>
            </div>
            <div className="home" id="contact">
               <h1>contact</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar