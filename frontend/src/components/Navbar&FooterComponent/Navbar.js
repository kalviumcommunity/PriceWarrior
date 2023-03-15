import './navbar&footer.css';
import {FaSearch, FaHome, FaTags, FaComments, FaList, FaPlus} from "react-icons/fa"
import {Button} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../asseets/logo.png'
import flag from '../asseets/indian2.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';




function Navbar({ handleScrollClick}) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSearch=()=>{
    const searchForm = document.querySelector('.search-form');
    searchForm.classList.toggle('active');
  }

const handleClick = (e) => {
  e.target.setAttribute("class", "skewBackGround");
};

const handleLeave = (e) => {
  e.target.removeAttribute("class", "skewBackGround");
};


  return (
    <>
        <header className="header">
          <div className='header-1'>
          <img id='logo-img' src={logo}/>
          <a href="#" class="logo" id='websiteName'>  Price Warrior </a>
          

<form action="" className="search-form">
    <input type="search" name="" placeholder="Search here..." id="search-box"/>
    <label ><FaSearch/></label>
</form>

<div className="icons">
  <img src={flag} width='50'/>
            <div id="search-btn" onClick={handleSearch}><FaSearch/></div>
            <Button variant="contained" startIcon={<PersonIcon/>} color='success' size='small' style={{fontSize:'1.5rem', background: '#FFB800',
              color:'black',display:'flex', alignItems:'center'}}>Login</Button>
            
        </div>



        
      


          </div>
          <div className="header-2">
        <nav className="navbar">
          <div >
            <Link to={'/'}  className='navbar-links' onMouseEnter={handleClick} onMouseLeave={handleLeave}>Home</Link>
            </div>
            <div >
            <Link to={'/games'} className='navbar-links' onMouseEnter={handleClick} onMouseLeave={handleLeave}>Games</Link>
            </div>
            <div >
            <a onClick={handleScrollClick} className='navbar-links' onMouseEnter={handleClick} onMouseLeave={handleLeave}>Featured</a>
            </div>
            <div >
            <a href="#home" className='navbar-links' onMouseEnter={handleClick} onMouseLeave={handleLeave}>About Us</a>
            </div>
            <Link to={'/AdminOp'} style={{position:'absolute'}}>
          <Button
      style={{opacity:'0.5',fontSize:'2rem',display:'flex',  opacity: isHovered ? '1' : '0.5', background: isHovered ? 'lightBlue' : 'blue',justifyContent:'center',alignItems:'center',backgroundColor:'blue',borderRadius:'10rem', height:'6rem', width:'6rem', bottom:'6rem', zIndex:'9999', right:'4rem', position:'fixed' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      
    >
      <FaPlus/>
    </Button>
    </Link> 
        </nav>
    </div>
        </header>

        <nav className="bottom-navbar">
    <Link to={'/'}><FaHome/></Link>
    <Link to={'/games'} ><FaList/></Link>
    <a href="#arrivals" ><FaTags/></a>
    <a href="#reviews" ><FaComments/></a>
    <a href='#'><FaPlus/></a>
    
</nav>
    </>
  )
}

export default Navbar