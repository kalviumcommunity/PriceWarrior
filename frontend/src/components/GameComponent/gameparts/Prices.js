import React from 'react';
import steam from '../../asseets/steam.png'
import epic from '../../asseets/epic.png'
import greenman from '../../asseets/greenman1.png'
import rdr2 from '../../asseets/rdr2.jpg'
import {FaWindows, FaPlaystation, FaXbox} from 'react-icons/fa'

function Prices() {
  return (
    <div className='outermost-div'>
        <div className='prices-outer-div'>
        <div className='price-container'>
       <div className='name-div'>
        <h3 className='h3' style={{fontFamily:'auto'}}>RDR <span className='span'>II</span> Standard </h3>
       </div>
       <div className='site-name'>
       <img src={steam} width='40'/>
        <h3>Steam</h3>
        

       </div>
       <div>
        <h2 className='h3'>Rs 2500</h2>
        </div> 
        </div>

        

        <div className='price-container'>
       <div className='name-div'>
        <h3 className='h3' style={{fontFamily:'auto'}}>RDR <span className='span'>II</span> Standard</h3>
       </div>
       <div className='site-name'>
       <img src={epic} width='40'/>
        <h3>Epic Games</h3>
        

       </div>
       <div>
        <h2 className='h3'>Rs 2200</h2>
        </div> 
        </div>


        <div className='price-container'>
       <div className='name-div'>
        <h3 className='h3' style={{fontFamily:'auto'}}>RDR <span className='span'>II</span> Standard</h3>
       </div>
       <div className='site-name'>
       <img src={greenman} width='40'/>
        <h3>GreenMan Gaming</h3>
        

       </div>
       <div>
        <h2 className='h3'>Rs 2000</h2>
        </div> 
        </div>

        <div className='price-container'>
       <div className='name-div'>
        <h3 className='h3' style={{fontFamily:'auto'}}>RDR <span className='span'>II</span> Standard</h3>
       </div>
       <div className='site-name'>
       <img src={greenman} width='40'/>
        <h3>GreenMan Gaming</h3>
        

       </div>
       <div>
        <h2 className='h3'>Rs 2000</h2>
        </div> 
        </div>

        <div className='price-container'>
       <div className='name-div'>
        <h3 className='h3' style={{fontFamily:'auto'}}>RDR <span className='span'>II</span> Standard</h3>
       </div>
       <div className='site-name'>
       <img src={epic} width='40'/>
        <h3>Epic Games</h3>
        

       </div>
       <div>
        <h2 className='h3'>Rs 2200</h2>
        </div> 
        </div>

        <div className='price-container'>
       <div className='name-div'>
        <h3 className='h3' style={{fontFamily:'auto'}}>RDR <span className='span'>II</span> Standard </h3>
       </div>
       <div className='site-name'>
       <img src={steam} width='40'/>
        <h3>Steam</h3>
        

       </div>
       <div>
        <h2 className='h3'>Rs 2500</h2>
        </div> 
        </div>

        <div className='price-container'>
       <div className='name-div'>
        <h3 className='h3' style={{fontFamily:'auto'}}>RDR <span className='span'>II</span> Standard </h3>
       </div>
       <div className='site-name'>
       <img src={steam} width='40'/>
        <h3>Steam</h3>
        

       </div>
       <div>
        <h2 className='h3'>Rs 2500</h2>
        </div> 
        </div>

        
    </div>

    <div className='some-detail'>
      
    <img className='game-img' src={rdr2}/>
    <div className='inner-div'>
    <div>
      <p>Release Date:<br></br> 02 March 2023</p>
    </div>
    <div>
      <p>Platforms:<br/>
        <FaWindows style={{marginRight:'0.5rem'}}/><FaPlaystation  style={{marginRight:'0.5rem'}}/><FaXbox style={{marginRight:'0.5rem'}}/>
      </p>


    </div>

    <div>
      Developer / Publisher: <br/>
      <h4 style={{textDecoration:'underLine'}}>Arpit / Gulati</h4>
    </div>
    <div>Genres:<br/>
    <div style={{display:'flex', flexWrap:'wrap'}}>
    <h5>Simulation</h5>
    <h5>RolePlay</h5>
    <h5>Fictional World</h5>
    </div>
    </div>

    <div>Tags:<br/>
    <div style={{display:'flex', flexWrap:'wrap'}}>
    <h5 >Adventure</h5>
    <h5 >Simulation</h5>
    <h5 >Exploration</h5>
    <h5 >Mystery</h5>
    <h5 >Adventure</h5>
    <h5 >Simulation</h5>
    <h5 >Exploration</h5>
    <h5 >Mystery</h5>
    <h5 >Adventure</h5>
    <h5 >Simulation</h5>
    <h5 >Exploration</h5>
    <h5 >Mystery</h5>
    <h5 >Adventure</h5>
    <h5 >Simulation</h5>
    <h5 >Exploration</h5>
    
    
    


    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Prices