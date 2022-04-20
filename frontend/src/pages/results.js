import React from 'react'
import './results.css';
import Jobcard from '../components/jobcard';
import Jobsummarycard from '../components/jobsummarycard';

function Results({jobs,frontier,location, displayNewCard, summary}) {
  
  console.log(frontier);
  console.log(location);

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