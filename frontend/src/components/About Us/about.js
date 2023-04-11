import React from "react";
// import LoremIpsum from "react-lorem-ipsum";
import img from "../asseets/boy.png";
import "./about.css";
// import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function about() {
  return (
    <section className="about">
      <div className="content">
        <img src={img} />
        <div className="text">
          <h1>Hello!!</h1>
          <h3>My Name is Arpit Gulati </h3>
          <h5>
            I'm a{" "}
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Full-Stack Developer", "Designer", "Problem Solver"],
              }}
            />
          </h5>
          <p>
            I am  Full-Stack Developer with a passion for building innovative
            and user-friendly web applications. Proficient in HTML, CSS,
            JavaScript, and various web development frameworks such as React,
            Node.js, and Express & MongoDb. Strong understanding of both front-end and
            back-end development, as well as database management. Seeking
            opportunities to expand my skill set and contribute to a dynamic
            development team. I am even good at C++ when it comes to
            programming. When it comes to design I have a fair but good
            Knowledge of Figma.
          </p>

          <button
            onClick={(e) => {
              window.location.href = "mailto:arpit.gulati@kalvium.community";
              e.preventDefault();
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default about;
