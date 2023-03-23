import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "../../asseets/featured-game-icon.png";

// import data from "./data";
function UpcomingGames({data}) {


  

  
  return (
    <div id="upcoming-game-container">
      <section class="section upcoming-game">
        <div class="container">
          <h2 class="h2 section-title" style={{ fontFamily: "auto" }}>
            Upcoming <span class="span">Games</span>
          </h2>

          <ul class="ul-scrollbar">
            {data
              .filter((item) => item.isUpcoming)
              .map((item) => {
                return (
                  <li class="scrollbar-item">
                    <Link to={`/games/${item._id}`}>
                      <div class="upcoming-game-card">
                        <figure
                          class="card-banner img-holder"
                          style={{ width: "450", height: "600" }}
                        >
                          <img
                            src={item.homeImage}
                            width="450"
                            height="600"
                            loading="lazy"
                            alt="Just for Gamers"
                            class="img-cover"
                          />
                        </figure>

                        <div class="card-content"></div>

                        <div class="card-content-overlay">
                          <img
                            src={img1}
                            width="36"
                            height="60"
                            color="black"
                            alt=""
                            class="card-icon"
                          />

                          <h3 class="h3">
                            <a href="#" class="card-title">
                              {item.name}{" "}
                              <span class="span">{item.lastName}</span>
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
