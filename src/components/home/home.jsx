import React from "react";
import "./home.css";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import prompts from "../prompts/prompts";

const home = () => {
  return (
    <div className="body">
      <div className="homep">
        <Navbar />
        <h1 className="tit">GENERATE IMAGES FROM TEXT.</h1>
        <p className=".container data">
          Using the power of DALL-E, bring your thoughts and ideas into reality.
          DALL-E and DALL-E 2 are deep learning models developed by OpenAI to
          generate digital images from natural language descriptions, called
          "prompts".
        </p>

        <Link className="btn" to="/prompts">
          EXPLORE
        </Link>
      </div>
    </div>
  );
};

export default home;
