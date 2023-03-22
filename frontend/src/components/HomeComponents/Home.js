import React from "react";
import HomeTop from "./HomeTopComponent/HomeTop";
import LatestGame from "./LatestGames/LatestGame";
import UpcomingGames from "./UpcomingGames/UpcomingGames";
import Something from "./Something/Something";

function Home({mainRef}) {
  return (
    <div>
      <HomeTop />
      <Something mainRef = {mainRef} />
      <LatestGame />
      <UpcomingGames />
    </div>
  );
}

export default Home;
