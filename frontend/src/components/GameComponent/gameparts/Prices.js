import React from 'react';
import steam from '../../asseets/steam.png'
import epic from '../../asseets/epic.png'
import greenman from '../../asseets/greenman1.png'
import question from '../../asseets/question.png'
import rdr2 from '../../asseets/rdr2.jpg'
import {FaWindows, FaPlaystation, FaXbox} from 'react-icons/fa'

function Prices(props) {
  let img
  
  return (
    <div className='outermost-div'>
        <div className='prices-outer-div'>

          {props.prices.map((e)=>{
            if(e.site==="Steam"){
              img = steam
            }
            else if(e.site==="Epic"){
              img = epic
            }
            else if(e.site==="GreenMan Gaming"){
              img = greenman
            }
            else{
              img = question
            }
            return(
              <div className='price-container'>
       <div className='name-div'>
        <h3 className='h3' style={{fontFamily:'auto'}}>{e.name}</h3>
       </div>
       <div className='site-name'>
       <img src={img} width='40'/>
        <h3>{e.site}</h3>
        

       </div>
       <div>
        <h2 className='h3'>{e.price}</h2>
        </div> 
        </div>
            )
          })}
       

        

        
        </div>

    <div className='some-detail'>
      
    <img className='game-img' src={props.img}/>
    <div className='inner-div'>
    <div>
      <p>Release Date:<br></br>{props.releaseDate}</p>
    </div>
    <div>
      <p>Platforms:<br/>
        <FaWindows style={{marginRight:'0.5rem'}}/><FaPlaystation  style={{marginRight:'0.5rem'}}/><FaXbox style={{marginRight:'0.5rem'}}/>
      </p>


    </div>

    <div>
      Developer / Publisher: <br/>
      <h4 s>{props.developer} / {props.publisher}</h4>
    </div>
    <div>Genres:<br/>
    <div style={{display:'flex', flexWrap:'wrap'}}>
    {props.genres.map((e)=>{
     return(
     <h5 className='tags'>{e.genre}</h5>
     )})}
    </div>
    </div>

    <div>Tags:<br/>
    <div style={{display:'flex', flexWrap:'wrap'}}>
    {props.tags.map((e)=>{
     return(
     <h5 className='tags'>{e.tag}</h5>
     )})}
    
    
    


    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Prices