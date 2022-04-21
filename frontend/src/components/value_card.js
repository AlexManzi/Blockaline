import React,{useState} from 'react'

function Value_Card({value}) {

    const [click, setClick] = useState(false)

    function handleClick() {
       click ? setClick(false) : setClick(true)
       console.log(click);

    }

  return (
    <div className= {click ? "chosen" : "span"} onClick={handleClick}>{value.title}</div>
  )
}

export default Value_Card