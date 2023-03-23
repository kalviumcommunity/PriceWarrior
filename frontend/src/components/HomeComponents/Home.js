import React from "react";
import HomeTop from "./HomeTopComponent/HomeTop";
import LatestGame from "./LatestGames/LatestGame";
import UpcomingGames from "./UpcomingGames/UpcomingGames";
import Something from "./Something/Something";
import { useState, useEffect } from "react";
import axios from 'axios'
import loadin from '../asseets/loadinghd.gif'


function Home({mainRef, data}) {

  

  return (
    <div>
      
        
        <HomeTop />
        <Something mainRef = {mainRef} />
        <LatestGame data={data}/>
        <UpcomingGames data={data}/>
        
      
     
    </div>
  );
}

export default Home;
