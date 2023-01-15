import React from "react";
import "./navbar.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import home from "../home/home";

import gallery from "../gallery/gallery";

const navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link className="navitem" to="/home">
            HOME
          </Link>
        </li>
        <li>
          <Link className="navitem" to="/prompts">
            PROMPTS
          </Link>
        </li>
        <li>
          <Link className="navitem" to="/gallery">
            GALLERY
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
