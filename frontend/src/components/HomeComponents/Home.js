import React from "react";
import HomeTop from "./HomeTopComponent/HomeTop";
import LatestGame from "./LatestGames/LatestGame";
import UpcomingGames from "./UpcomingGames/UpcomingGames";
import Something from "./Something/Something";



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
