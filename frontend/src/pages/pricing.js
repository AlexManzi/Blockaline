import React, { useState } from 'react'
import './pricing.css';
import Jobcard from '../components/jobcard';

function Pricing({jobs}) {

  let [jobTitle, setJobTitle] = useState("")
  let [coName, setCoName] = useState("")
  let [coRating, setCoRating] = useState("")
  let [coLogo, setCoLogo] = useState("")
  let [coNumber, setCoNumber] = useState()

  let jobsMap = jobs.map(job => {
    return (
      <Jobcard
        key={job.id}
        job={job}
        handleDelete={handleDelete}
        />
    )
  })

  function handleTitle(e) {
    setJobTitle(e.target.value)
  }

  function handleName(e) {
    setCoName(e.target.value)
  }

  function handleRating(e) {
    setCoRating(e.target.value)
  }

  function handleLogo(e){
    setCoLogo(e.target.value)
  }

  function handleAddListing() {
    console.log("JT" + jobTitle);
    fetch("/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: jobTitle,
        logo: coLogo,
        company_id: coNumber,
      })
    })
    fetch("/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: coName,
        rating: coRating,
  })
  })
  .then(resp => resp.json())
  .then(res => console.log(res))
    window.location.reload();
}

function handleTransaction() {
  if (coNumber === "Flatiron") {
    (coNumber = 1)
  } 
  else if (coNumber === "Alibaba Group") {
    (coNumber = 2)
  }
  else if (coNumber === "Linkedin") {
    (coNumber = 3)
  }
  else if (coNumber === "Facebook") {
    (coNumber = 4)
  }
  else if (coNumber === "Twitter") {
    (coNumber = 5)
  }
  else if (coNumber === "Paypal") {
    (coNumber = 6)
  }
  else if (coNumber === "Tesla") {
    (coNumber = 7)
  }
  else if (coNumber === "Kickstarter") {
    (coNumber = 8)
  }
  else if (coNumber === "Asana") {
    (coNumber = 9)
  }
  else if (coNumber === "Sony") {
    (coNumber = 10)
  }
  else if (coNumber === "Microsoft") {
    (coNumber = 11)
  }
  else if (coNumber === "Google") {
    (coNumber = 12)
  }
  else if (coNumber === "Intel") {
    (coNumber = 13)
  }
}

  function handleDelete(id) {
    fetch(`http://localhost:4000/jobs/${id}`, {
      method: 'DELETE',
})
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    window.location.reload();
}

handleTransaction()

console.log(coNumber)

  return (
    <div id="postajob">
      <div id="inputside">
        <h1>Enter your job posting here!</h1>
        <div id="jobinfohere">
        <input className="jobinputs" type="text" onChange={handleTitle} placeholder='Job Title'></input>
        <select className='jobinputs' value={coNumber} onChange={e=>setCoNumber(e.target.value)}>
          <option value="location" disabled hidden> Choose Location</option>
          <option> Flatiron</option>
          <option>Alibaba Group</option>
          <option>Linkedin</option>
          <option>Facebook</option>
          <option>Twitter</option>
          <option>Paypal</option>
          <option>Tesla</option>
          <option>Kickstarter</option>
          <option>Asana</option>
          <option>Sony</option>
          <option>Microsoft</option>
          <option>Google</option>
          <option>Intel</option>
        </select>
        <input className="jobinputs" type="text" onChange={handleRating} placeholder='Company Rating'></input>
        <input className="jobinputs" type="text" onChange={handleLogo} placeholder='Company Logo'></input>
        <button id="pressthis" className="jobinputs" onClick={handleAddListing}>Post listing!</button>
        </div>
      </div>
      <div id="displayside">
      {jobsMap}
      </div>

    </div>
  )
}



export default Pricing