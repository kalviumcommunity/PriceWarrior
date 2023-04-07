import React from "react";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function About({
  trailer,
  releaseDate,
  developer,
  publisher,
  relatedLinks,
  recommendedRequirements,
  minimumRequirements,
  tags,
  description,
  genres,
}) {

  const myFunction = ()=>{
    let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More⬇️"
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less⬆️";
    moreText.style.display = "inline";
  }
  }
  return (
    <div>
      <div className="outermost-div">
        <div className="prices-outer-div">
          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              src={trailer}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="some-detail-res">
            <div className="inner-div">
              <div>
                <p>
                  Release Date:<br></br> {releaseDate}
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
                <h4>
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
                      return (
                        <h5 className="tags" key={index}>
                          {e.genre}
                        </h5>
                      );
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
                      return (
                        <h5 className="tags" key={index}>
                          {e.tag}
                        </h5>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="game-description">
            <h3
              className="h3"
              id="requirement-heading"
              style={{ marginBottom: "1rem",marginLeft:'1rem', color: "hsl(42, 99%, 46%)" }}
            >
              Game Description
            </h3>
            <p style={{whiteSpace:'pre-line'}}>{description.slice(0, 425) }<span id="dots">...</span> <span id="more">{description.slice(425,description.length)}</span> </p>
            <h2 onClick={myFunction} id="myBtn">Read More⬇️</h2>
          </div>
        </div>
        <div className="qwer">
          <div className="some-detail-requirements">
            <h3
              className="h3"
              id="requirement-heading"
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                color: "hsl(42, 99%, 46%)",
              }}
            >
              Requirements
            </h3>
            <div
              style={{
                marginLeft: "3rem",
                marginRight: "3rem",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ marginBottom: "1rem", textDecoration: "underline" }}>
                Minimum
              </h3>

              <ul>
                {minimumRequirements
                  .filter((e) => e.specs !== "")
                  .map((e, index) => {
                    return (
                      <li key={index}>
                        <span style={{ color: "hsl(42, 99%, 46%)" }}>
                          {" "}
                          {e.specs}:
                        </span>{" "}
                        {e.info}
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div
              style={{
                marginLeft: "3rem",
                marginRight: "3rem",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ marginBottom: "1rem", textDecoration: "underline" }}>
                Recommended
              </h3>

              <ul>
                {recommendedRequirements
                  .filter((e) => e.specs !== "")
                  .map((e, index) => {
                    return (
                      <li key={index}>
                        <span style={{ color: "hsl(42, 99%, 46%)" }}>
                          {" "}
                          {e.specs}:
                        </span>{" "}
                        {e.info}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div
            className="some-detail-requirements"
            style={{ marginTop: "2rem" }}
          >
            <h3
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                color: "hsl(42, 99%, 46%)",
              }}
              className="h3"
              id="requirement-heading"
            >
              Related Links
            </h3>
            <div
              style={{
                marginLeft: "3rem",
                marginRight: "3rem",
                marginBottom: "1rem",
              }}
            >
              <ul>
                {relatedLinks
                  .filter((e) => e.mssg !== "")
                  .map((e, index) => {
                    return (
                      <li key={index}>
                        <a href={e.link}>{e.mssg}</a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
