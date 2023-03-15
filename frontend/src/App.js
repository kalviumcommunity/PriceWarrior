import './App.css';
import GameFinal from './components/GameComponent/gameFinal';
import Home from './components/HomeComponents/Home';
import Form from './components/RegistrationForm/Form';
import Navbar from './components/Navbar&FooterComponent/Navbar.js';
import { Route, Routes} from 'react-router-dom';
import Footer from './components/Navbar&FooterComponent/Footer';
import Prices from './components/GameComponent/gameparts/Prices';
import AdminForm from './components/AdminPortalForm/AdminForm';
import Something from './components/HomeComponents/Something/Something';
import MainGameHome from './components/GameComponent/gameMainPage/mainGameCarousel';
import About from './components/GameComponent/gameparts/About';
import AdminFormPut from './components/AdminPortalForm/AdminFormPut';
import { useRef } from 'react';
function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      {/* <Route path={'/games/prices/:id'} element={<Prices/>}/> */}
      <Route path={'/games/:id'} element={<GameFinal/>} />
      {/* <Route path={'/games'} element={<GameMain/>}/> */}
      <Route path={'/games'} element={<MainGameHome/>}/>

      <Route path={'/AdminOp'} element={<AdminForm/>}/>
      <Route path={'/AdminOp'} element={<AdminForm/>}/>
      <Route path={'/AdminOpPut/:id'} element={<AdminFormPut/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
