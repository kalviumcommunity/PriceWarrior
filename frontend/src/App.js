import './App.css';
import GameFinal from './components/GameComponent/gameFinal';
import Home from './components/HomeComponents/Home';
import Form from './components/RegistrationForm/Form';
import Navbar from './components/Navbar&FooterComponent/Navbar.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Navbar&FooterComponent/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <GameFinal/>
      {/* <Home/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
