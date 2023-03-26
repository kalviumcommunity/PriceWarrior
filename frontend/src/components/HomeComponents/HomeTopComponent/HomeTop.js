import "./homeTop.css";
import Background from "../../asseets/hero-bg.jpg";
import heroPic from "./heroPictures";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function HomeTop() {
  const [count, setCount] = useState(0);
  const [mousedOver, setMousedOver] = useState(true);

  useEffect(() => {
    // set an interval timer if we are currently moused over
    if (mousedOver) {
      const timer = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % heroPic.length);
      }, 10000);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [mousedOver]);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".heroContent-subtitle").classList.add("active");
    }, 3000);

    setTimeout(() => {
      document
        .querySelector(".heroContent-subtitle")
        .classList.remove("active");
    }, 5000);
  }, []);

  const handleEnter = () => {
    const exploreBtn = document.getElementById("explore-btn");
    exploreBtn.classList.add("hero-btn-1");
    exploreBtn.classList.remove("hero-btn");
  };
  const handleLeave = () => {
    const exploreBtn = document.getElementById("explore-btn");
    exploreBtn.classList.remove("hero-btn-1");
    exploreBtn.classList.add("hero-btn");
  };
  return (
    <div>
      <section
        class="hero-section"
        style={{ backgroundImage: "url(" + Background + ")" }}
      >
        <div class="hero-container">
          <div class="heroContent">
            <h3 class="heroContent-subtitle">Price Warrior</h3>

            <h1 class="heroContent-title">
              <span class="span">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["Explore", "Compare the Price", "& Buy"],
                  }}
                />
              </span>
            </h1>

            <p class="heroContent-text">
              Tired of Browsing through multiple sites to check price of game!
              Find the best deals on your favorite games with our price
              comparison website. Browse multiple Online Stores and save Time
              and Money on every purchase.
            </p>
            <Link to={'/games'}>
            <button
              id="explore-btn"
              class="hero-btn skewBackGround"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              Explore More
            </button>
            </Link>
          </div>

          <figure
            class="heroPicture-banner"
            style={{ width: "700", height: "700" }}
          >
            <img
              src={heroPic[count].image}
              width="700"
              height="700"
              alt="heroPicture banner"
              class="heroPicture"
            />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default HomeTop;
