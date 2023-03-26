import React from "react";
// import { FiSend } from "react-icons/fi";
import {
  FaLinkedin,
  FaInstagram,
  
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { fontSize } from '@mui/system';

function Footer() {
  return (
    <>
      <footer>
        <ul className="social_icon">
          <li>
            <a href="https://www.linkedin.com/in/arpit-gulati-431158257/" target={'_blank'}>
              <FaLinkedin style={{ color: "#0072b1" }} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ag_124_/" target='_blank'>
              <FaInstagram style={{ color: "#fa7e1e" }} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Arpit1204" target='_blank'>
              <FaGithub style={{ color: "black" }} />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/aboutus'} href="#">About Us</Link>
          </li>
          
        </ul>
        <h2>
          {" "}
          ©2023 Price Warrior | All Right <span className="span">Reserved</span>
        </h2>{" "}
      </footer>
    </>
  );
}

export default Footer;
