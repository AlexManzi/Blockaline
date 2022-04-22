import React from 'react'
import './jobcard.css';

function Jobcard({job, displayNewCard, handleDelete}) {

  return (
    <div id="jobpreview" onClick={()=> displayNewCard(job)}>
      <div id="jobcard" onClick={()=>handleDelete(job.id)}>
      <img id="logo" src={job.logo}/>
      <h3>{job.title}</h3>
      <h4>{job.company.rating}★</h4>
      <h4>{job.company.title}</h4>
      </div>
    </div>
  )
}

export default Jobcard