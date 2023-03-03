import './App.css';
import GameFinal from './components/GameComponent/gameFinal';
import Home from './components/HomeComponents/Home';
import Form from './components/RegistrationForm/Form';
import Navbar from './components/Navbar&FooterComponent/Navbar.js';
import { Route, Routes} from 'react-router-dom';
import Footer from './components/Navbar&FooterComponent/Footer';
import Prices from './components/GameComponent/gameparts/Prices';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      {/* <Route path={'/games/prices/:id'} element={<Prices/>}/> */}
      <Route path={'/games/:id'} element={<GameFinal/>} />
      
      
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
