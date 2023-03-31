import React, { useEffect, useState } from "react";
import "./gameMain.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import GameList from "./GameMain";
import axios from "axios";
import loadin from '../../asseets/loadinghd7.gif'

function MainGameHome() {
  const [List, setList] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiGameCall = async ()=>{
      const res = await axios.get(`${process.env.REACT_APP_DataBase_link_to_Access_data}/gameMainGet`)
       setList(res.data);
       setTimeout(()=>{
         setLoading(false)

       },1000)
    }
    apiGameCall()
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DataBase_link_to_Access_data}/gameMainGet`)
      .then((res) => res.json())

      .then((data) => setPopular(data));
  }, []);

  return (
    <div className="gamefinal">
      {loading ?(
         <div className="loading-ani">
         <img width='250' src={loadin}/>
         <h2>Loading...</h2>
         </div>
      ):(
        <div className="parts">
        <GameList List = {List} setList = {setList} />
      </div>
      )}

   
    </div>
  );
}

export default MainGameHome;
