import React from 'react'
import rdr2 from '../../asseets/rdr2.jpg'
import {FaWindows, FaPlaystation, FaXbox} from 'react-icons/fa'


function About() {
  return (
    <div>
        <div className='outermost-div'>
        <div className='prices-outer-div'>
           <div className='iframe-container'> 
        <iframe className='responsive-iframe' src="https://www.youtube.com/embed/QkkoHAzjnUs"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className='some-detail-res'>
      
    
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
        <div className='game-description'>
            <h2 style={{marginBottom:'2rem', textDecoration:'underline'}}>Game Description</h2>
        <p>
        Welcome to Arcade Paradise, the 90’s-fuelled retro arcade adventure. Rather than washing rags for a living, you decide to turn the family laundromat into the ultimate arcade. Play, profit, and purchase new arcade machines, with over 35 to choose from, to build your very own Arcade Paradise!

Take the laundromat business made up of dull chores from washing clothes to throwing out the trash, and turn it into a booming arcade with the coolest games in town raking in all the money!

Over 35 arcade games, each fully realized with its own gameplay, stories, missions, and high scores to set! Inspired by 3 decades of gaming, from early vector games right up to the 32-bit era.

Insert a second coin and play against a friend in a number of co-operative & competitive arcade games with up to 4 players locally.

Prove yourself across each game, set your high scores, make your favourite arcade game more popular and upload to the online leaderboards.

From the individual games to choosing what song to put on the jukebox inspired by some of the great records of the early 90s, the soundtrack captures the heart of a bygone era.

Hello 90’s. If you could smell this game, it would smell like memories. Everything from the look and feel of the arcades, to using the latest PC connected to the mind-blowing dial-up connection, all have been recreated with pure love.

Doug Cockle (famous for his voice acting in Victor Vran and The Witcher series) plays the role of Ashley’s berating father. Being too busy in the Riviera to see King Wash for himself, you will receive many phone calls from Gerald sharing his wise words of advice and constant reminders to fix the toilet.        </p>
        </div>
</div>
        <div className='some-detail-requirements' >
       
            <h3 className='h3' id='requirement-heading' style={{marginTop:'1rem', marginBottom:'1rem', color:'hsl(42, 99%, 46%)'}}>Requirements</h3>
            <div style={{marginLeft:'3rem', marginRight:'3rem', marginBottom:'1rem'}}>
            <h3 style={{marginBottom:'1rem',textDecoration:'underline'}}>Minimum</h3>
            
            <ul >
                <li>
                    <span style={{color:'hsl(42, 99%, 46%)'}}> Graphics:</span> NVIDIA Geforce® GTX™ 560 or AMD Radeon™ HD 7770</li>
                <li>Os: Windows 10</li>
                <li>Processor: Intel® Core™ i3 with 2.8 GHz or AMD equivalent</li>
                <li>DirectX: Version 11</li>
                <li>Storage: 32 GB available space</li>
                <li>Sound Card: DirectX®-compatible</li>
                <li>Additional Notes: This config will run the game with approx 30 FPS on 1080p</li>
            </ul>
            </div>

            <div style={{marginLeft:'3rem', marginRight:'3rem', marginBottom:'1rem'}}>
            <h3  style={{marginBottom:'1rem', textDecoration:'underline'}}>Recommended</h3>
            
            <ul>
                <li>
                    <span style={{color:'hsl(42, 99%, 46%)'}}> Graphics:</span> NVIDIA GeForce® GTX™ 970 or AMD Radeon™ R9 380X</li>
                <li>Os: Windows 10</li>
                <li>Processor:  Intel® Core™ i5 with 3.0 GHz or AMD equivalent</li>
                <li>DirectX: Version 11</li>
                <li>Storage: 32 GB available space</li>
                <li>Sound Card: DirectX®-compatible</li>
                <li>Additional Notes: This config will run the game with approx 30 FPS on 1080p</li>
            </ul>
            </div>

        </div>
        </div>
    </div>
  )
}

export default About