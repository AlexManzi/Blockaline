import React from 'react'
import './jobcard.css';

function Jobcard({job, displayNewCard}) {

  return (
    <div id="jobpreview" onClick={()=> displayNewCard(job)}>
      <h3>{job.title}</h3>
      <h4>{job.description}</h4>
      <h4>{job.benefits}</h4>
    </div>
  )
}

export default Jobcard