import React from 'react'
import './latestGame.css';
import { LoremIpsum } from 'react-lorem-ipsum';
// import xx from '../../asseets/featured-game-1.jpg' 
import data from '../UpcomingGames/data';

function LatestGame() {
  return (
    <>
    <div class="section-wrapper">



<section class="section latest-game" aria-label="latest game">
  <div class="container">

    <h2 class="h2 section-title" style={{fontFamily:'auto'}}>Latest <span class="span">Releases</span></h2>

   

    <ul class="ul-scrollbar">

      {data.map((item)=>{
return(
<li class="scrollbar-item ">
        <div class="latest-game-card">

          <figure class="card-banner  img-holder" style={{width: '400', height: '470'}}>
            <img src={item.image}width="400" height="470" loading="lazy"
              alt="White Walker Daily" class="img-cover"/>
          </figure>

          <div class="card-content">

            <a href="#" class="card-badge skewBackGround">{item.genre}</a>

            <h3 class="h3">
              <a href="#" class="card-title">{item.name} <span class="span">{item.nameYellow}</span></a>
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