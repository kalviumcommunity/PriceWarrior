import React from "react";
import { Route, Routes } from "react-router-dom";

function Nav({ setSelectedButton }) {
  const handleClick = (e) => {
    setSelectedButton(e.target.innerText);
    console.log(e);

    const a = document.getElementsByClassName("nav-heading");
    for (let i = 0; i < a.length; i++) {
      if (a[i].hasAttribute("id", "active-price-route")) {
        a[i].removeAttribute("id", "active-price-route");
      }
    }
    e.target.setAttribute("id", "active-price-route");
  };

  return (
    <div className="nav-outer-div">
      <nav className="game-nav">
        <ul className="ul-scrollbar" id="game-scroll">
          <li
            className="nav-heading"
            id="active-price-route"
            onClick={handleClick}
          >
            Prices
          </li>
          <li className="nav-heading" onClick={handleClick}>
            About
          </li>
         
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
