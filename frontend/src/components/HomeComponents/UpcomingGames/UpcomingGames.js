import React from 'react'
import '../Home.css'

import data from './data'
function UpcomingGames() {
  return (
    <div id='upcoming-game-container'>
      

      <section class="section upcoming-game">
        <div class="container">

          <h2 class="h2 section-title"  style={{fontFamily:'auto'}}>
            Upcoming <span class="span">Games</span>
          </h2>

          <ul class="ul-scrollbar">
{data.map((item)=>{
  return(
 <li class="scrollbar-item">
 <div class="upcoming-game-card">

   <figure class="card-banner img-holder" style={{width: '450', height: '600'}}>
     <img src={item.image} width="450" height="600" loading="lazy"
       alt="Just for Gamers" class="img-cover"/>
   </figure>

   <div class="card-content">

     <h3 class="h3">
       <a href="#" class="card-title">
         {item.name} <span class="span">{item.nameYellow}</span>
         
       </a>
     </h3>

    

   </div>

   <div class="card-content-overlay">

     <img src={item.img} width="36" height="60"  color='black' alt=""
       class="card-icon"/>

     <h3 class="h3">
       <a href="#" class="card-title">
         {item.name} <span class="span">{item.nameYellow}</span>
       </a>
     </h3>

    
   </div>

 </div>
</li>)
})
  
}
           
            
            


          </ul>

        </div>
      </section>
    </div>
  )
}

export default UpcomingGames