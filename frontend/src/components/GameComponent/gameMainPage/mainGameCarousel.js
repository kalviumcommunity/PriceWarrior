import React, { useEffect, useState } from 'react';
import "./gameMain.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";
import GameList from './GameMain';

function MainGameHome() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_DataBase_link_to_Access_data}/gameMainGet`)
        .then(res => res.json())
        .then(data => setPopular(data))
    }, [])

  return (
    
      <div className='parts'>
        <GameList />
      </div>
    
  )
}

export default MainGameHome