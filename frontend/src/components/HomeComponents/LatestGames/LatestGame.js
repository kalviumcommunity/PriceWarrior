import React, { useState, useEffect } from 'react'
import './latestGame.css';
import { LoremIpsum } from 'react-lorem-ipsum';
// import xx from '../../asseets/featured-game-1.jpg' 
// import data from '../UpcomingGames/data';
import { Link } from 'react-router-dom';

function LatestGame() {

  const [data, setData] = useState([])

  useEffect(() => console.log(data), [data])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DataBase_link_to_Access_data}/gameGet`).then(res=>res.json()).then(data=>{
      
    
      setData(data)
      
    })

    
  
    
  }, [])
  
  return (
    <>
    <div class="section-wrapper">



<section class="section latest-game" aria-label="latest game">
  <div class="container">

    <h2 class="h2 section-title" style={{fontFamily:'auto'}}>Latest <span class="span">Releases</span></h2>

   

    <ul class="ul-scrollbar">

      {data.filter(item => item.isLatest).map((item)=>{
return(
  
<li class="scrollbar-item">
        <div class="latest-game-card">

          <figure class="card-banner  img-holder" style={{width: '400', height: '470'}}>
            <img src={item.homeImage}width="400" height="470" loading="lazy"
              alt="White Walker Daily" class="img-cover"/>
          </figure>

          <div class="card-content">

            <a href="#" class="card-badge skewBackGround">{item.homeGenre}</a>

            <h3 class="h3">
           
              <Link to={`/games/${item._id}`} class="card-title">{item.name} <span class="span">{item.lastName}</span></Link>
              
            </h3>

           
          </div>

        </div>
      </li>
      
      
)
      })
      

      

     
      

    }

    </ul>

  </div>
</section>
</div>
  </>
  )
}

export default LatestGame