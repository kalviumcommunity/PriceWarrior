import "../Home.css";
import someThingData from "./somethingImg";
import React from "react";

function Something({mainRef}) {
  return (
    <div ref={mainRef}>
      <section class="section brand" aria-label="brand">
        <div class="container">
          <ul class="ul-scrollbar">
            {someThingData.map((item) => {
              return (
                <li class="brand-item">
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
