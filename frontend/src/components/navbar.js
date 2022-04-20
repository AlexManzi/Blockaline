import React from 'react'
import './navbar.css';
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className='Nav'>
      
      <NavLink className='logo' to="/">Blockaline</NavLink>


      <NavLink className="link" to="/application">
         My Page
      </NavLink>

        <NavLink className="link" to="/pricing">
          Post a Job
        </NavLink>

        <NavLink className="Login" to="/login">
        Login
        </NavLink>
  

    </div>
  )
}

export default Navbar