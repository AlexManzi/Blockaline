import React, {useEffect, useState}from 'react'
import './my_page.css';
import Value_Card from './components/value_card';


function MyPage() {

    const [values, SetValues] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/values")
        .then(resp => resp.json())
        .then(data => {
          SetValues(data)
        })
      }, [])

      console.log(values);

      let mappedValues = values.map(value => {
          return(
              <Value_Card
               key={value.id}
               value={value}
               />
          )
      })


  return (
    <div className='master'>

        <div className='values'>
            <div>
                
                <h2>My Values</h2>

                {mappedValues}
            </div>
        </div>


    </div>
  )
}

export default MyPage