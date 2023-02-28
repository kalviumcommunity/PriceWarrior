import React from 'react'

function Nav() {
  return (
    <div className='nav-outer-div'>
       <nav className='game-nav'>
        <ul className='ul-scrollbar' id='game-scroll'>
          <li> < a href='#'  className='a'>Prices</a></li>
          <li> <a href='#' className='a'>About</a></li>

          <li> <a href='#'className='a'>Similar games</a></li>
        </ul>
       </nav>
    </div>
  )
}

export default Nav