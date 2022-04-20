import React from 'react'

function Value_Card({value}) {

    function handleClick(e) {
        // e.target.element.classList.add("chosen")
    }

  return (
    <div className='span' onClick={handleClick}>{value.title}</div>
  )
}

export default Value_Card