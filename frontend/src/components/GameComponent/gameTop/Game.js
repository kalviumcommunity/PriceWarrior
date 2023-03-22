import "../game.css";
import "../../HomeComponents/Home.css";
import img from "../../asseets/rdr2.jpg";
import { LoremIpsum } from "react-lorem-ipsum";
import { useEffect, useInsertionEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

function Game({
  img,
  rating,
  currentMin,
  currentAvg,
  currentMax,
  historyMax,
  historyAvg,
  historyMin,
  carouselImage,
  name,
  lastName,
  edition,
}) {
  const [prices, setPrices] = useState("Current");

  const handleClick = (e) => {
    setPrices(e.target.innerText);

    const a = document.getElementsByClassName("price-route");
    for (let i = 0; i < a.length; i++) {
      if (a[i].hasAttribute("id", "active-price-route")) {
        a[i].removeAttribute("id", "active-price-route");
      }
    }
    e.target.setAttribute("id", "active-price-route");
  };

  const handleClickRes = (e) => {
    setPrices(e.target.innerText);

    const a = document.getElementsByClassName("a");
    for (let i = 0; i < a.length; i++) {
      if (a[i].hasAttribute("id", "active-price-route")) {
        a[i].removeAttribute("id", "active-price-route");
      }
    }
    e.target.setAttribute("id", "active-price-route");
  };
  return (
    <div>
      {/* <div>
      <img id='game-img' src={img}/>
      </div> */}
      <div className="outer-div">
        <div className="game-detail">
          <div id="res-carousel" className="game-img-div">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={21}
              infiniteLoop={true}
              showStatus={false}
            >
              {carouselImage.map((e, index) => {
                return <img src={e.link} className="game-img" key={index} />;
              })}
            </Carousel>
          </div>
          <div id="static-img" className="game-img-div">
            <img className="game-img" src={img} />
          </div>
          <div className="game-specific-details">
            <h2
              className="h2 game-detail-name"
              style={{ fontFamily: "auto", marginBottom: "1rem" }}
            >
              {name} <span className="span">{lastName}</span>
            </h2>
            {edition[0].editionName !== "" && (
              <div className="edition">
                <h3 className="h3" style={{ fontFamily: "auto" }}>
                  Editions:
                </h3>

                <div style={{ flexWrap: "wrap" }}>
                  {edition
                    .filter((e) => e.editionName !== "")
                    .map((e) => {
                      return <h5 className="tags">{e.editionName}</h5>;
                    })}
                </div>
              </div>
            )}
            <p>
              Our website compares prices from all major retailers and gaming
              platforms, so you can be sure you're getting the best deal.
            </p>
            <h2>{rating}⭐</h2>
          </div>
        </div>
        <div className="prices">
          <div className="prices-in">
            <div className="prices-heading">
              <h3
                id="active-price-route"
                className="price-route"
                onClick={handleClick}
              >
                Current
              </h3>
              <h3 className="price-route" onClick={handleClick}>
                Historically
              </h3>
            </div>
          </div>
          {prices === "Current" && (
            <div className="current-history-detail">
              <div>
                <h2 className="quan" id="min" style={{ fontFamily: "auto" }}>
                  Minimum:
                </h2>
                <h3>
                  <span className="span">Rs {currentMin}</span>{" "}
                </h3>
              </div>

              <div>
                <h2 className="quan" id="avg" style={{ fontFamily: "auto" }}>
                  Average:
                </h2>
                <h3>
                  <span className="span">Rs {currentAvg}</span>{" "}
                </h3>
              </div>

              <div>
                <h2 className="quan" id="max" style={{ fontFamily: "auto" }}>
                  Maximum:
                </h2>
                <h3>
                  <span className="span">Rs {currentMax}</span>{" "}
                </h3>
              </div>
            </div>
          )}

          {prices === "Historically" && (
            <div className="current-history-detail">
              <div>
                <h2 className="quan" id="min" style={{ fontFamily: "auto" }}>
                  Minimum:
                </h2>
                <h3>
                  <span className="span">Rs {historyMin}</span>{" "}
                </h3>
              </div>

              <div>
                <h2 className="quan" id="avg" style={{ fontFamily: "auto" }}>
                  Average:
                </h2>
                <h3>
                  <span className="span">Rs {historyAvg}</span>{" "}
                </h3>
              </div>

              <div>
                <h2 className="quan" id="max" style={{ fontFamily: "auto" }}>
                  Maximum:
                </h2>
                <h3>
                  <span className="span">Rs {historyMax}</span>{" "}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="game-top-res-nav">
        <div className="nav-outer-div">
          <nav className="game-nav">
            <ul className="ul-scrollbar" id="game-scroll">
              <li>
                {" "}
                <a
                  id="active-price-route"
                  className="a"
                  onClick={handleClickRes}
                >
                  Current
                </a>
              </li>
              <li>
                {" "}
                <a className="a" onClick={handleClickRes}>
                  Historically
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {prices === "Current" && (
          <div className="current-history-detail-res">
            <div>
              <h2 className="max" id="min">
                Minimum:
              </h2>
              <h3>
                <span className="span">Rs {currentMin}</span>{" "}
              </h3>
            </div>

            <div>
              <h2 className="max" id="avg">
                Average:
              </h2>
              <h3>
                <span className="span">Rs {currentAvg}</span>{" "}
              </h3>
            </div>

            <div>
              <h2 className="" id="max">
                Maximum:
              </h2>
              <h3>
                <span className="span">Rs {currentMax}</span>{" "}
              </h3>
            </div>
          </div>
        )}

        {prices === "Historically" && (
          <div className="current-history-detail-res">
            <div>
              <h2 className="max" id="min">
                Minimum:
              </h2>
              <h3>
                <span className="span">Rs {historyMin}</span>{" "}
              </h3>
            </div>

            <div>
              <h2 className="max" id="avg">
                Average:
              </h2>
              <h3>
                <span className="span">Rs {historyAvg}</span>{" "}
              </h3>
            </div>

            <div>
              <h2 className="" id="max">
                Maximum:
              </h2>
              <h3>
                <span className="span">Rs {historyMax}</span>{" "}
              </h3>
            </div>
          </div>
        )}
      </div>

      {/* <div className='prices-res'>
     <div className='prices-in-res'>
        <div className='prices-heading-res ul-scrollbar'>
          <h3 id='current-res' className='price-route'>Current</h3>
          <h3 id='history-res' className='price-route'>Historical</h3>
          </div>
          
          
        </div>
     </div>  */}
    </div>
  );
}

export default Game;
