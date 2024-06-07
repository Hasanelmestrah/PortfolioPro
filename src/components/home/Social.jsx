import React from "react";
import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/hasanelmestrah"
        className="home__social-icon"
        target="_blank">
        <FaInstagram />
      </a>

      <a
        href="https://www.twitter.com/hasanelmestrah"
        className="home__social-icon"
        target="_blank">
        <FaXTwitter />
      </a>

      <a
        href="https://github.com/hasanelmestrah"
        className="home__social-icon"
        target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
