import React from 'react'
import './results.css';
import Jobcard from '../components/jobcard';
import Jobsummarycard from '../components/jobsummarycard';

function Results({jobs,frontier,location, displayNewCard, summary, seeker }) {
  
  console.log(seeker)

  function handleAddFavorite() {
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        seeker_id: seeker.id,
        job_id: summary.id
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  let jobsMap = jobs.map(job => {
    return (
      <Jobcard
        key={job.id}
        job={job}
        displayNewCard={displayNewCard}
        />
    )
  })

  let jobsSummaryMap = 
      <Jobsummarycard
        key={summary.id}
        summary={summary}
        handleAddFavorite={handleAddFavorite}
        />

  return (
    <div id="resultspage">
      <div id="totalparent">
      <div id="jobpreviewcontainer">
        <div>
          {jobsMap}
        </div>
      </div>
      <div id="positionsummary">
        {jobsSummaryMap}
      </div>
      </div>
    </div>
  )
}

export default Results