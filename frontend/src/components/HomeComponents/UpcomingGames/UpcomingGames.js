import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "../../asseets/featured-game-icon2.png";

// import data from "./data";
function UpcomingGames({data}) {


  

  
  return (
    <div id="upcoming-game-container">
      <section className="section upcoming-game">
        <div className="container">
          <h2 className="h2 section-title" style={{ fontFamily: "auto" }}>
            Upcoming <span className="span">Games</span>
          </h2>

          <ul className="ul-scrollbar">
            {data
              .filter((item) => item.isUpcoming)
              .map((item, index) => {
                return (
                  <li className="scrollbar-item" key={index}>
                    <Link to={`/games/${item._id}`}>
                      <div className="upcoming-game-card">
                        <figure
                          className="card-banner img-holder"
                          style={{ width: "450", height: "600" }}
                        >
                          <img
                            src={item.homeImage}
                            width="450"
                            height="600"
                            loading="lazy"
                            alt="Just for Gamers"
                            className="img-cover"
                          />
                        </figure>

                        <div className="card-content"></div>

                        <div className="card-content-overlay">
                          <img
                            src={img1}
                            width="36"
                            height="60"
                            color="black"
                            alt=""
                            className="card-icon"
                          />

                          <h3 className="h3">
                            <a href="#" className="card-title">
                              {item.name}{" "}
                              <span className="span">{item.lastName}</span>
                            </a>
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default UpcomingGames;
