import React from "react";
import steam from "../../asseets/steam.png";
import epic from "../../asseets/epic.png";
import greenman from "../../asseets/greenman1.png";
import ps from "../../asseets/ps.png";
import dl from "../../asseets/dl.png";
import gb from "../../asseets/gb.png";
import cd from "../../asseets/cd2.png";
import ig from "../../asseets/ig.png";
import gamivo from "../../asseets/gamivo.png";
import question from "../../asseets/question.png";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Prices({
  prices,
  carouselImage,
  tags,
  genres,
  developer,
  publisher,
  releaseDate,
}) {
  let img;
  

  return (
    <div className="outermost-div">
      <div className="prices-outer-div">
        {prices
          .filter((e) => e.price !== "")
          .map((e, index) => {
            if (e.site === "Steam") {
              img = steam;
            } else if (e.site === "Epic Games") {
              img = epic;
            } else if (e.site === "CD keys") {
              img = cd;
            } else if (e.site === "GreenMan Gaming") {
              img = greenman;
            } else if (e.site === "Instant Gaming") {
              img = ig;
            } else if (e.site === "Game Billet") {
              img = gb;
            } else if (e.site === "Gamivo") {
              img = gamivo;
            } else if (e.site === "Play Station") {
              img = ps;
            } else if (e.site === "DL Gamer") {
              img = dl;
            } else {
              img = question;
            }

            const x = e.name.split(" ");
            console.log(x.size);
            const len = x.length - 1;
            let y = "";
            for (let i = 0; i < len; i++) {
              y += x[i] + " ";
            }
            console.log(y);

            return (
              <div className="price-container" key={index}>
                <div className="name-div">
                  <h3 className="h3" style={{ fontFamily: "auto" }}>
                    {y} <span className="span">{x[x.length - 1]}</span>
                  </h3>
                </div>
                <div className="site-name">
                  <img src={img} width="40" />
                  <h3>{e.site}</h3>
                </div>
                <div>
                  <h2 className="h3">Rs {e.price}</h2>
                </div>
              </div>
            );
          })}
      </div>

      <div className="some-detail">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={21}
          infiniteLoop={true}
          showStatus={false}
        >
          {carouselImage
            .filter((e) => e.link !== "")
            .map((e, index) => {
              return <img src={e.link} className="game-img" key={index} />;
            })}
        </Carousel>
        <div className="inner-div">
          <div>
            <p>
              Release Date:<br></br>
              {releaseDate}
            </p>
          </div>
          <div>
            <p>
              Platforms:
              <br />
              <FaWindows style={{ marginRight: "0.5rem" }} />
              <FaPlaystation style={{ marginRight: "0.5rem" }} />
              <FaXbox style={{ marginRight: "0.5rem" }} />
            </p>
          </div>

          <div>
            Developer / Publisher: <br />
            <h4 s>
              {developer} / {publisher}
            </h4>
          </div>
          <div>
            Genres:
            <br />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {genres
                .filter((e) => e.genre !== "")
                .map((e, index) => {
                  return <h5 className="tags" key={index}>{e.genre}</h5>;
                })}
            </div>
          </div>

          <div>
            Tags:
            <br />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {tags
                .filter((e) => e.tag !== "")
                .map((e, index) => {
                  return <h5 className="tags" key={index}>{e.tag}</h5>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
