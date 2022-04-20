import React from 'react'
import './jobsummarycard.css';

function Jobsummarycard(summary) {

    console.log(summary)
    return (
    <div>
        <h2>{summary.summary.title}</h2>
        <h2>{summary.summary.description}</h2>
    </div>
    )
}

export default Jobsummarycard