import React from 'react'
import './favorite_card.css';

function Favorite_card() {
  return (
    <div>
          <div>
        <div id="wholeparent">
        <div className="summarygrid">
        <h2> Company Title</h2>
        <h2>Job Title</h2>
        
        <h3>salary $</h3>
        <h3>Hybrid</h3>
        <h4>In person</h4>
        </div>
        <div className="applygrid">
        <div className="applybutton">
            {/* <button id="fave">Add to Favorites!</button> */}
            <button id="apply">Apply!</button>
        </div>
        </div>
        </div>
        <div id="">
        <h2>Mission Statement</h2>
        <h2>Job Description</h2>
        <h2>Tags</h2>
        </div>
    </div>
    </div>
  )
}

export default Favorite_card