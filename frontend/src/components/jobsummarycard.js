import React from 'react'
import './jobsummarycard.css';

function Jobsummarycard({summary, handleAddFavorite}) {


    function applyFunction() {
        alert("You've applied to this position! We hope you hear back soon!")
    }
    console.log(summary)
    return (
    <div>
        <div id="wholeparent">
        <div id="summarygrid"> 
        <h2>{summary.company.title}</h2>
        <h2>{summary.title}</h2>
        
        <h3>{summary.salary}</h3>
        <h3>{summary.company.hybrid}</h3>
        <h4>{summary.company.remote}</h4>
        </div>
        <div id="applygrid">
        <div id="applybutton">
            <button id="fave" onClick={handleAddFavorite}>Add to Favorites!</button>
            <button id="apply" onClick={applyFunction}>Apply!</button>
        </div>
        </div>
        </div>
        <div id="summaryinfo">
        <h2>{summary.company.mission_statement}</h2>
        <h2>{summary.description}</h2>
        <h2>{summary.company.tags}</h2>
        </div>
    </div>
    )
}

export default Jobsummarycard