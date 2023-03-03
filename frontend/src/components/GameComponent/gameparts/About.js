import React from 'react'
import rdr2 from '../../asseets/rdr2.jpg'
import {FaWindows, FaPlaystation, FaXbox} from 'react-icons/fa'


function About(props) {
  return (
    <div>
        <div className='outermost-div'>
        <div className='prices-outer-div'>
           <div className='iframe-container'> 
        <iframe className='responsive-iframe' src={props.trailer}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className='some-detail-res'>
      
    
    <div className='inner-div'>
    <div>
      <p>Release Date:<br></br> {props.releaseDate}</p>
    </div>
    <div>
      <p>Platforms:<br/>
        <FaWindows style={{marginRight:'0.5rem'}}/><FaPlaystation  style={{marginRight:'0.5rem'}}/><FaXbox style={{marginRight:'0.5rem'}}/>
      </p>


    </div>

    <div>
      Developer / Publisher: <br/>
      <h4 >{props.developer} / {props.publisher}</h4>
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
        <div className='game-description'>
            <h2 style={{marginBottom:'2rem', textDecoration:'underline'}}>Game Description</h2>
        <p>
       {props.description} </p>
        </div>
</div>
<div className='qwer'>
        <div className='some-detail-requirements' >
       
            <h3 className='h3' id='requirement-heading' style={{marginTop:'1rem', marginBottom:'1rem', color:'hsl(42, 99%, 46%)'}}>Requirements</h3>
            <div style={{marginLeft:'3rem', marginRight:'3rem', marginBottom:'1rem'}}>
            <h3 style={{marginBottom:'1rem',textDecoration:'underline'}}>Minimum</h3>
            
            <ul >
              {props.minimumRequirements.map((e)=>{
                return (
                  <li>
                  
                  <span style={{color:'hsl(42, 99%, 46%)'}}> {e.specs}:</span> {e.info}</li>
                )
              })}
               
                
            </ul>
            </div>

            <div style={{marginLeft:'3rem', marginRight:'3rem', marginBottom:'1rem'}}>
            <h3  style={{marginBottom:'1rem', textDecoration:'underline'}}>Recommended</h3>
            
            <ul>
            {props.recommendedRequirements.map((e)=>{
                return (
                  <li>
                  
                  <span style={{color:'hsl(42, 99%, 46%)'}}> {e.specs}:</span> {e.info}</li>
                )
              })}
            </ul>
            </div>

        </div>
        <div className='some-detail-requirements' style={{marginTop:'2rem'}}>
          <h3 style={{marginTop:'1rem', marginBottom:'1rem', color:'hsl(42, 99%, 46%)'}} className='h3' id='requirement-heading'>Related Links</h3>
          <div style={{marginLeft:'3rem', marginRight:'3rem', marginBottom:'1rem'}}>
          <ul>

          {props.relatedLinks.map((e)=>{
            return(
              <li><a href={e.link}>{e.mssg}</a></li>
            )
           })}
           

            
          </ul>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About