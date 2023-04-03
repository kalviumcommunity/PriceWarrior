
import { Link } from "react-router-dom";

function LatestGame({data}) {


  

  return (
    <>
      <div className="section-wrapper">
        <section className="section latest-game" aria-label="latest game">
          <div className="container">
            <h2 className="h2 section-title" style={{ fontFamily: "auto" }}>
              Latest <span className="span">Releases</span>
            </h2>

            <ul className="ul-scrollbar">
              {data
                .filter((item) => item.isLatest)
                .map((item, index) => {
                  return (
                    <li className="scrollbar-item" key={index}>
                      <Link to={`/games/${item._id}`}>
                      <div className="latest-game-card">
                        <figure
                          className="card-banner  img-holder"
                          style={{ width: "400", height: "470" }}
                        >
                          <img
                            src={item.homeImage}
                            width="400"
                            height="470"
                            loading="lazy"
                            alt="White Walker Daily"
                            className="img-cover"
                          />
                        </figure>

                        <div className="card-content">
                          <a href="#" className="card-badge skewBackGround">
                            {item.homeGenre}
                          </a>

                          <h3 className="h3">
                            <a  className="card-title">
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
    </>
  );
}

export default LatestGame;
