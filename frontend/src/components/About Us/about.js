import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import img from '../asseets/boy.png'
import './about.css'
import { Link } from 'react-router-dom'


function about() {
    const   sendEmail = ()=> 
{
    window.open.href = "mailto:address@dmail.com";
}
  return (
    <section className='about'>
        <div className='content'>
        <img src={img}/>
        <div className='text'>
            <h1>About Me</h1>
            <h5>Developer and Designer</h5>
            <p>
                <LoremIpsum p={1}/>
            </p>
           
            
            <button onClick={(e)=>{
                window.location.href="mailto:arpit.gulati@kalvium.community"
                e.preventDefault()

            }} >
           Contact Me
            </button>
            
        </div>
        </div>
    </section>
  )
}

export default about