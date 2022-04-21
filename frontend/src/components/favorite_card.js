import React from 'react'
import './favorite_card.css';

function Favoritecard({info}) {

  // console.log(info)
  return (
    <div>
        <div>
        <div id="wholeparent">
        <div className="summarygrid">
        <h2>{info.job.title}</h2>
        <h3>{info.job.salary}</h3>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Favoritecard