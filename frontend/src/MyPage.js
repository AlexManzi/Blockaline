import React, {useEffect, useState}from 'react'
import './my_page.css';
import Value_Card from './components/value_card';
import Favorite_card from './components/favorite_card';


function MyPage() {

    const [values, SetValues] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/values")
        .then(resp => resp.json())
        .then(data => {
          SetValues(data)
        })
      }, [])

      let mappedValues = values.map(value => {
          return(
              <Value_Card
               key={value.id}
               value={value}
               />
          )
      })


  return (
    <div className='masterMyPage'>

        {/* <div className='faves'> */}

            {/* <h1>Favorites</h1>
            <Favorite_card/>
            
        </div> */}

        <div className='values'>
            <div>

                <h2 id='Title'>My Values</h2>

                {mappedValues}
            </div>

    

        </div>


    </div>
  )
}

export default MyPage