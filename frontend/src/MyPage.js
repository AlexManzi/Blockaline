import React, {useEffect, useState}from 'react'
import './my_page.css';
import ValueCard from './components/value_card';
import Favorite_card from './components/favorite_card';


function MyPage({seeker}) {

    const [values, SetValues] = useState([])
    const [favorites, setFavorites] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:4000/favorites/(seeker_id)")
    //     .then(resp => resp.json())
    //     .then(data => {
    //       setFavorites(data)
    //     })
    //   }, [])

    // if the user in "state" is not defined / not logged in
    // then we give an error message
    // maybe an if else in the return (not sure)

    //  let  mappedFavories = favorites.map(favorite => {
    //      return(
    //          <Favorite_card
    //          key={favorite.key}
    //          title={favorite.job.title}
    //          />
    //      )
    //  })

    useEffect(() => {
        fetch("http://localhost:4000/values")
        .then(resp => resp.json())
        .then(data => {
          SetValues(data)
        })
      }, [])

      let mappedValues = values.map(value => {
          return(
              <ValueCard
               key={value.id}
               value_title={value.title}
               value_id={value.id}
               seeker={seeker}
               />
          )
      })



  return (
    <div className='masterMyPage'>

        {/* <div className='faves'> */}

            {/* <h1>Favorites</h1>
            {mappedFavorites}
            
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