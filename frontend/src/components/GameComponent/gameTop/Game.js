import '../game.css';
import img from '../../asseets/rdr2.jpg'
import {LoremIpsum} from 'react-lorem-ipsum';

function Game(props) {
  return (
    <div>

      {/* <div>
      <img id='game-img' src={img}/>
      </div> */}
     <div className='outer-div'>
      <div className='game-detail'>
        <div className='game-img-div'>
    <img className='game-img' src={props.img}/>
        </div>
        <div className='game-specific-details'>
          
    <h2 className='h2 game-detail-name'  style={{fontFamily:'auto', marginBottom:'1rem'}}>{props.name}<span className='span'>{props.lastName}</span></h2>
    <div className='edition'>
    <h3 className='h3' style={{fontFamily:'auto'}}>Editions:</h3>
    <div style={{flexWrap:'wrap'}}>
    {props.edition.map((e)=>{
     return(
     <h5 className='tags'>{e.editionName}</h5>
     )})}
    </div>

    </div>
    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula consequat vehicula vehicula nullam torquent felis et.</p>
    <h2>{props.rating}⭐</h2>
    
        </div>
      </div>
      <div className='prices'>
        <div className='prices-in'>
        <div className='prices-heading'>
          <h3 id='current' className='price-route'>Current</h3>
          <h3 id='history' className='price-route'>Historical</h3>
          </div>
          
          
        </div>
        
        
      </div>
     </div>


<div className='game-top-res-nav'>
     <div className='nav-outer-div' >
       <nav className='game-nav'>
        <ul className='ul-scrollbar' id='game-scroll'>
          <li> < a href='#'  className='a'>Current</a></li>
          <li> <a href='#' className='a'>Historically</a></li>
          
        </ul>
       </nav>
    </div>
    </div>

     
      {/* <div className='prices-res'>
     <div className='prices-in-res'>
        <div className='prices-heading-res ul-scrollbar'>
          <h3 id='current-res' className='price-route'>Current</h3>
          <h3 id='history-res' className='price-route'>Historical</h3>
          </div>
          
          
        </div>
     </div>  */}
    </div>
  )
}

export default Game