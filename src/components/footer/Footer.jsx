import React from "react";
import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hasan</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/hasanelmestrah"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a
            href="https://www.twitter.com/hasanelmestrah"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer">
            <FaXTwitter />
          </a>

          <a
            href="https://github.com/hasanelmestrah"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <span className="footer__copy">
          2024 &#169; Hasan El-Mestrah , All rights reserved .
          <br />
          Powered By
          <a
            href="https://www.divlopers.com"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            Divlopers{" "}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
