import React, {useState} from 'react'
import './signup.css';
import { Link } from 'react-router-dom'

function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [frontier, setFrontier] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword (e) {
    setPassword(e.target.value)
  }

  function handleFrontier(e) {
    setFrontier(e.target.value)
  }

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }

  function handleLastName(e){
    setLastName(e.target.value)
  }

  function handleFormSubmit(e){
    e.preventDefault();
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setFrontier('frontier')
  }

  function handleSubmit() {
    fetch("/seekers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name:firstName,
        last_name: lastName,
        email: email,
        password: password,
        frontier: frontier
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
  <form onSubmit={handleFormSubmit}>
    <div id="signupparent">
      <div id="signupbox">
        <h2>Align Your Life</h2>
        <h3>Join Blockaline</h3>
        <div id="signups">
          <div id="names">
        <input className='nameinput' placeholder='First Name' value={firstName} onChange={handleFirstName}></input>
        <input className='nameinput' placeholder='Last Name' value={lastName} onChange={handleLastName}></input>
          </div>
        <input className='signupinput' placeholder='Enter Your Email' value={email} onChange={handleEmail}></input>
        <input type="password" className='signupinput' placeholder='Create Password' value={password} onChange={handlePassword}></input>
        <select defaultValue={frontier} className='signupinput' onChange={handleFrontier}>
          <option value="frontier" disabled hidden> Choose Frontier</option>
          <option >Data Science</option>
          <option>Software Engineering</option>
          <option>Cyber Security</option>
          <option>UX Design</option>
        </select>
        <Link to="/login"><button id="signupbutton" className='signupinput' onClick={handleSubmit}>Sign Up</button></Link>
        </div>
        <div id="login">
        <p>Already have an account?</p> <Link to="/login"><p id="larea">Login here!</p></Link>
        </div>
      </div>
    </div>
  </form>
  )
}

export default Signup