import Game from './gameTop/Game';
import Nav from './gameSectionNav/Nav';
import Prices from './gameparts/Prices';
import About from './gameparts/About';

import React from 'react'

function gameFinal() {
  return (
    <div>
        <Game/>
        <Nav/>
        <Prices/>
        <About/>
    </div>
  )
}

export default gameFinal