import "./App.css";
import GameFinal from "./components/GameComponent/gameFinal";
import Home from "./components/HomeComponents/Home";
import Navbar from "./components/Navbar&FooterComponent/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Navbar&FooterComponent/Footer";
import AdminForm from "./components/AdminPortalForm/AdminForm";
import MainGameHome from "./components/GameComponent/gameMainPage/mainGameCarousel";
import AdminFormPut from "./components/AdminPortalForm/AdminFormPut";
import { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
// import Image from '../src/components/demo/src/App.js'
import loadin from '../src/components/asseets/loadinghd8.gif'
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiCallGame = async()=>{
      const res = await axios.get(`${process.env.REACT_APP_DataBase_link_to_Access_data}/gameGet`)
        
          setData(res.data);
          setTimeout(()=>{
            setLoading(false)
          },2000)
       

    }
    apiCallGame();
  }, []);
  const mainRef = useRef(null);
  return (
    <div className="App">
      {loading?(
        <div className="loading-ani-main">
        <img width='250' src={loadin}/>
        <h2>Loading... Plz Stand By!</h2>
        </div>
      ):(
        <>
<Navbar mainRef = {mainRef} />

<Routes>
  <Route path={"/"} element={<Home  mainRef = {mainRef} data={data} />} />
 
  <Route path={"/games/:id"} element={<GameFinal />} />
  <Route path={"/games"} element={<MainGameHome />} />

  <Route path={"/adminop"} element={<AdminForm />} />
  <Route path={"/adminopput/:id"} element={<AdminFormPut />} />
</Routes>
<Footer />
</>
      )}
      
    </div>
  );
}

export default App;
