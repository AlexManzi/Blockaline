import React,{useState} from 'react'

function ValueCard({value_title, value_id}) {

    const [click, setClick] = useState(false)
    const [valueBasket, setValueBasket] = useState(false)
    // we need to set the user in state through the sign up / login/ auto login
    // when we know who the user is we can set the green Classname dependent on 
    // if that user has that basket value or not 

    // if(user.baskets.include(value_id){
    // setClick(true)
    // })

    function handleClick() {
       click ? setClick(!click) : setClick(!click)
       console.log(value_id);

      if (click){
          fetch("http://localhost:4000/baskets/2", {
              method: "DELETE",
              headers: {
                  "Content-Type": "application/json"
              }
          })
          .then(resp => resp.json())
          .then(data => console.log(data))
   
    }  else {
        fetch("http://localhost:4000/baskets", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              seeker_id: 2,
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