import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <a
        href="https:www.linkedin.com/in/esmeralda-romero-412735219/"
        target="_blank"
      >
        <FaLinkedin className="icon" />
      </a>

      <a href="https://github.com/esmy101" target="_blank">
        <FaGithub className="icon" />
      </a>
    </footer>
  );
}
