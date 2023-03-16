import React from 'react'
import rdr2 from '../../asseets/rdr2.jpg'
import {FaWindows, FaPlaystation, FaXbox} from 'react-icons/fa'
import {MdArrowBackIosNew} from 'react-icons/md'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';


function About({trailer, releaseDate, developer, publisher, relatedLinks,
               recommendedRequirements, minimumRequirements,tags, description, genres}) {
  
  
  return (
    <div>
        <div className='outermost-div'>
        <div className='prices-outer-div'>
          

   
      <div className='iframe-container'>
            <iframe className='responsive-iframe' src={trailer}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
    

        <div className='some-detail-res'>
      
    
    <div className='inner-div'>
    <div>
      <p>Release Date:<br></br> {releaseDate}</p>
    </div>
    <div>
      <p>Platforms:<br/>
        <FaWindows style={{marginRight:'0.5rem'}}/><FaPlaystation  style={{marginRight:'0.5rem'}}/><FaXbox style={{marginRight:'0.5rem'}}/>
      </p>


    </div>

    <div>
      Developer / Publisher: <br/>
      <h4 >{developer} / {publisher}</h4>
    </div>
    <div>Genres:<br/>
    <div style={{display:'flex', flexWrap:'wrap'}}>
    {genres.filter(e=>e.genre!=='').map((e, index)=>{
     return(
     <h5 className='tags'key={index}>{e.genre}</h5>
     )})}
    </div>
    </div>

    <div>Tags:<br/>
    <div style={{display:'flex', flexWrap:'wrap'}}>
    {tags.filter(e=>e.tag!=='').map((e, index)=>{
     return(
     <h5 className='tags' key={index}>{e.tag}</h5>
     )})}
    
    
    


    </div>
    </div>
    </div>
    </div>
        <div className='game-description'>
            <h3 className='h3' id='requirement-heading' style={{ marginBottom:'1rem', color:'hsl(42, 99%, 46%)'}}>Game Description</h3>
        <p>
       {description} </p>
        </div>
</div>
<div className='qwer'>
        <div className='some-detail-requirements' >
       
            <h3 className='h3' id='requirement-heading' style={{marginTop:'1rem', marginBottom:'1rem', color:'hsl(42, 99%, 46%)'}}>Requirements</h3>
            <div style={{marginLeft:'3rem', marginRight:'3rem', marginBottom:'1rem'}}>
            <h3 style={{marginBottom:'1rem',textDecoration:'underline'}}>Minimum</h3>
            
            <ul >
              {minimumRequirements.filter(e=>e.specs!=='').map((e)=>{
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
            {recommendedRequirements.filter(e=>e.specs!=='').map((e)=>{
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

          {relatedLinks.filter(e=>e.mssg!=='').map((e)=>{
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