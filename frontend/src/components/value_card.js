import React,{useEffect, useState} from 'react'

function ValueCard({value_title, value_id, seeker}) {

    const [click, setClick] = useState(false)
    const [valueBasket, setValueBasket] = useState(false)
    
    // if(seeker.baskets.include(value_id){
    // setClick(true)
    // })
    // console.log(seeker.id);
    // if(seeker.baskets.includes(value_id))
    // useEffect(() => {
    //   if(seeker.values.id = value_id) {
    //     setClick(true)
    //   } else{
    //     console.log('vibes')
    //   }
    // },[])
    // useEffect(() => {
    //   console.log(seeker)
    // },[])
    // console.log(seeker.baskets);


    function handleClick() {
       click ? setClick(!click) : setClick(!click)
       console.log(value_id);

      if (click){
        fetch(`http://localhost:4000/bdestroy`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            seeker_id: seeker.id,
            value_id: value_id
            // this seeker_id is meant to be dynamic based on seeker state / seesion
          })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
     }
   
     else {
        fetch(`http://localhost:4000/baskets`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              seeker_id: seeker.id,
              value_id: value_id
              // this seeker_id is meant to be dynamic based on seeker state / seesion
            })
          })
          .then(resp => resp.json())
          .then(data => console.log(data))
       }

     }

  return (
    // <div value={value.title} className= {click ? "chosen" : "span"} onClick={handleClick}>{value.title}</div>
    <div className= {click ? "chosen" : "span"}   onClick={() => handleClick()}>
    {value_title}
  </div>
  )
}

export default ValueCard