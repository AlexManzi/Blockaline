import React, {useState} from 'react'
import { Link } from "react-router-dom"
import './home.css';



function Home({formData}) {

  const [frontierValue, setFrontierValue] = useState("frontier") 
  const [cityValue, setCityValue] = useState("location")
  // Ask Bradon. Why does the state need to be the same 'String' as the defualt value
  let [displayCity, setDisplayCity] = useState("Denver")


  function setFrontier (event) {
    setFrontierValue(event.target.value)
  }

  function setCity (event) {
    setCityValue(event.target.value)
  }

  function onFormData(){
    formData(frontierValue, cityValue)
  }
  
  return (
    <div className='master'>

      <h1 className='Title'> Don't Work — Align </h1>
      <h2 className='subtitle'> Align Your Values With The Blockchain</h2>

      <div className='selectContainer'>

 
    {/* <select defaultValue={frontierValue} className='select' onChange={setFrontier}>

        <option value="frontier" disabled hidden> Choose Frontier</option>
        <option >Data Science</option>
        <option>Software Engineering</option>
        <option>Cyber Security</option>
        <option>UX Design</option>
        <option>All Frontiers</option>

  </select> */}

    <select className='select' defaultValue={cityValue} onChange={setCity}>
        <option value="location" disabled hidden> Choose Location</option>
        <option >Los Angeles</option>
        <option>New York</option>
        <option >Austin</option>
        <option>Chicago</option>
        <option >Denver</option>
        <option>All Locations</option>
    </select> 

   <Link to="/results" onClick={onFormData}> <button className='align'>Align</button></Link>
  </div>
        
  {/* <img src="https://media2.giphy.com/media/26gR0OfapamWTkOha/giphy.gif" className='animation' alt="Hexagon Blocks Animation"></img> */}
  {/* <img src="https://media3.giphy.com/media/TKLz6PABHzhjCj5NFF/giphy.gif?cid=790b761165e34de7c6ad4fec8da01cf35e8817bf853ce293&rid=giphy.gif&ct=s" className='animation' alt="Hexagon Blocks Animation"></img> */}

    </div>
    
  )
}

export default Home