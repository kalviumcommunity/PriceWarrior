import "../Home.css";
import someThingData from "./somethingImg";
import React from "react";

function Something({mainRef}) {
  return (
    <div ref={mainRef}>
      <section className="section brand" aria-label="brand">
        <div className="container">
          <ul className="ul-scrollbar">
            {someThingData.map((item, index) => {
              return (
                <li className="brand-item" key={index}>
                  <img src={item.img} width="90" height="90" alt="logo" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Something;
