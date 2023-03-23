import React, { useState, useEffect } from "react";
// import "./latestGame.css";
import { LoremIpsum } from "react-lorem-ipsum";
// import xx from '../../asseets/featured-game-1.jpg'
// import data from '../UpcomingGames/data';
import { Link } from "react-router-dom";

function LatestGame({data}) {


  

  return (
    <>
      <div class="section-wrapper">
        <section class="section latest-game" aria-label="latest game">
          <div class="container">
            <h2 class="h2 section-title" style={{ fontFamily: "auto" }}>
              Latest <span class="span">Releases</span>
            </h2>

            <ul class="ul-scrollbar">
              {data
                .filter((item) => item.isLatest)
                .map((item) => {
                  return (
                    <li class="scrollbar-item">
                      <Link to={`/games/${item._id}`}>
                      <div class="latest-game-card">
                        <figure
                          class="card-banner  img-holder"
                          style={{ width: "400", height: "470" }}
                        >
                          <img
                            src={item.homeImage}
                            width="400"
                            height="470"
                            loading="lazy"
                            alt="White Walker Daily"
                            class="img-cover"
                          />
                        </figure>

                        <div class="card-content">
                          <a href="#" class="card-badge skewBackGround">
                            {item.homeGenre}
                          </a>

                          <h3 class="h3">
                            <a  class="card-title">
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
    </>
  );
}

export default LatestGame;
