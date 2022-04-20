import React from 'react'
import './jobsummarycard.css';

function Jobsummarycard({summary}) {

    console.log(summary)
    return (
    <div>
        <div id="wholeparent">
        <div id="summarygrid"> 
        <h2>{summary.title}</h2>
        <h2>{summary.title}</h2>
        
        <h3>{summary.salary}</h3>
        <h3>{summary.hybrid}</h3>
        <h4>{summary.remote}</h4>
        </div>
        <div id="applygrid">
        <div id="applybutton">
            <button id="fave">Add to Favorites!</button>
            <button id="apply">Apply!</button>
        </div>
        </div>
        </div>
        <div id="summaryinfo">
        <h2>{summary.title}</h2>
        <h2>{summary.description}</h2>
        <h2>{summary.title}</h2>
        </div>
    </div>
    )
}

export default Jobsummarycard