import React from 'react'
import './favorite_card.css';

function Favoritecard({info}) {

  function applyFunction() {
    alert("You've applied to this position! We hope you hear back soon!")
}

  // console.log(info)
  return (
    <div id="favcardtop">
        <div>
        <div id="wholeparent">
            <div className="summarygrid">
              <div id="favcard">
              <img id="logopic" alt="logo"src={info.job.logo}/>
              <h2>{info.job.title}</h2>
              <h2>{info.job.salary}</h2>
              <h2>{info.job.description}</h2>
              <h2></h2>
              <button id="presstoapply" onClick={applyFunction}>Apply!</button>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Favoritecard