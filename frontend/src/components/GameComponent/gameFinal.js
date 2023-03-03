import Game from './gameTop/Game';
import Nav from './gameSectionNav/Nav';
import Prices from './gameparts/Prices';

import About from './gameparts/About';
import { useParams } from 'react-router-dom';
import particularData from '../HomeComponents/UpcomingGames/gameData';
import { useState, useEffect } from 'react';

function GameFinal() {
  const {id}=useParams()
  console.log(id)
  const [gameData, setGameData] = useState()
  useEffect(() => console.log(gameData), [gameData])

  useEffect(() => {
    fetch(`http://localhost:4000/gameGet/${id}`).then(res=>res.json()).then(data=>{
      
    setGameData(data)
      
    })

    // console.log(adata)cd frontend
  
    
  }, [id])
  
  let detail=particularData[Number(id)-1]
  return gameData&&(
    <div className='gamefinal'>
     
        <Game 
        name={gameData.name}
        lastName={gameData.lastName}
        img={gameData.detailImage}
        edition={gameData.editions}
        rating={gameData.rating}
        />



        <Nav/>



        {/* <Prices
         img={gameData.detailImage}
        releaseDate={gameData.releaseDate}
        developer={gameData.developer}
        publisher={gameData.publisher}
        genres={gameData.genres}
        tags={gameData.tags}
        prices={gameData.prices}/>



        <About 
        description={gameData.description}
        relatedLinks={gameData.relatedLinks}
        minimumRequirements = {gameData.minimumRequirements}
        recommendedRequirements = {gameData.recommendedRequirements}
        trailer={gameData.trailer}
        releaseDate={gameData.releaseDate}
        developer={gameData.developer}
        publisher={gameData.publisher}
        genres={gameData.genres}
        tags={gameData.tags}

        /> */}
    </div>
  )
}

export default GameFinal