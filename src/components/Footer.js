import React from "react";
import { FaLinkedin, FaGithub, FaUserCircle } from "react-icons/fa";

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

      <a
        href="https://docs.google.com/document/d/12xhlzqK5HWuLAVh9L3m1BVi4pIzkUOLKgyoKHd9yE5A/edit?usp=sharing"
        target="_blank"
      >
        <FaUserCircle className="icon" />
      </a>
    </footer>
  );
}
