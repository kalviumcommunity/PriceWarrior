import React from "react";
// import { FiSend } from "react-icons/fi";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { fontSize } from '@mui/system';

function Footer() {
  return (
    <>
      <footer>
        <ul className="social_icon">
          <li>
            <a href="#">
              <FaLinkedin style={{ color: "#0072b1" }} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram style={{ color: "#fa7e1e" }} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter style={{ color: "#1DA1F2" }} />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Team</a>
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
