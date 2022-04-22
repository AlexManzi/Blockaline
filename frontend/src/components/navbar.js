import React, {useState} from 'react'
import './navbar.css';
import { Link, NavLink } from "react-router-dom";


function Navbar({seeker,setSeeker}) {

  const [bttnToggle, setBttnToggle] = useState(seeker ? "true" : false)

  console.log(seeker);

  console.log(bttnToggle);


  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setSeeker(null);
        console.log(seeker);
      }
    });
  }

 function  handleVibes () {
   console.log(bttnToggle);
 }

  return (
    <div className='Nav'>
      
      <NavLink className='logo' to="/">Blockaline</NavLink>


      <NavLink className="link" to="/my_page">
        My Page
      </NavLink>

        <NavLink className="link" to="/pricing">
          Post a Job
        </NavLink>

        <NavLink className="Login" to="/login">
          Align
        </NavLink>

        <div className="Logout" onClick={handleLogout}>
        {seeker ? "Logout" : null }
        </div>

        {/* <button onClick={handleVibes}>A-line</button> */}
  

    </div>
  )
}

export default Navbar