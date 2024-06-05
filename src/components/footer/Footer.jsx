import React from "react";
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
            <a href="#testimonials" className="footer__link">
              Divlopers
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/hasanelmestrah"
            className="home__social-icon"
            target="_blank">
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.twitter.com/hasanelmestrah"
            className="home__social-icon"
            target="_blank">
            <i class="uil uil-twitter-alt"></i>
          </a>

          <a
            href="https://github.com/hasanelmestrah"
            className="home__social-icon"
            target="_blank">
            <i class="uil uil-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &copy; 2024 Hasan El-Mestrah. Powered by{" "}
          <a href="https://www.divlopers.com" target="_blank">
            Divlopers
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
