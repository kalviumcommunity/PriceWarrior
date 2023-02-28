import './navbar&footer.css';
import {FaSearch, FaHome, FaTags, FaComments, FaList} from "react-icons/fa"
import {Button} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../asseets/logo.png'
import flag from '../asseets/indian2.png'




function Navbar() {

  const handleSearch=()=>{
    const searchForm = document.querySelector('.search-form');
    searchForm.classList.toggle('active');
  }

  const handleHoverEnter =()=>{
    const abc = document.getElementById('navbar-links');
      abc.classList.add('skewBackGround');
  
}
const handleHoverLeave =()=>{
  const abc = document.getElementById('navbar-links');
    abc.classList.remove('skewBackGround');

}
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
            <Button variant="contained" startIcon={<PersonIcon/>} color='success' size='medium' style={{fontSize:'1.5rem', background: '#FFB800',
              color:'black',display:'flex', alignItems:'center'}}>Login</Button>
            
        </div>




          </div>
          <div className="header-2">
        <nav className="navbar">
          <div >
            <a href="#home" id='navbar-links' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>Home</a>
            </div>
            <div >
            <a href="#home" className='navbar-links'>Games</a>
            </div>
            <div >
            <a href="#home" className='navbar-links'>Featured</a>
            </div>
            <div >
            <a href="#home" className='navbar-links'>About Us</a>
            </div>
          
        </nav>
    </div>
        </header>

        <nav className="bottom-navbar">
    <a href="#home"><FaHome/></a>
    <a href="#featured" ><FaList/></a>
    <a href="#arrivals" ><FaTags/></a>
    <a href="#reviews" ><FaComments/></a>
    
</nav>
    </>
  )
}

export default Navbar