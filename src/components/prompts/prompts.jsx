import React from "react";
import Navbar from "../navbar/navbar";
import { Configuration, OpenAIApi } from "openai";
import Loader from "../Loader/loader";

import "./prompts.css";
import { useState } from "react";

const prompts = () => {
  const api_key = import.meta.env.VITE_APP_API_KEY;

  // const apiKey =JSON.stringify({import.meta.env.REACT_APP_API_KEY});
  const [prompts, setPrompts] = useState("");
  const [img, setImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generate = async () => {
    const config = new Configuration({
      apiKey: api_key,
    });

    setIsLoading(true);
    const openai = new OpenAIApi(config);

    const result = await openai.createImage({
      prompt: prompts,
      n: 1,
      size: "512x512",
      user: "sad",
    });

    const url = result.data.data[0].url;
    setImg(url);
    console.log(url);
    setIsLoading(false);

    // send data
    const senddata = async () => {
      const response = await fetch("https://shn-api.vercel.app/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          desc: prompts,
          url: url,
        }),
      });
      const data = await response.json();
      console.log(data);
    };
    senddata();
  };

  const handleChange = (e) => {
    setPrompts(e.target.value);
    // console.log(prompts)
  };
  return (
    <div className="body">
      <div className="promptp1">
        <Navbar />
        <h1 className="headna">ENTER YOUR PROMPTS...</h1>
        <textarea
          placeholder="Enter your prompts"
          value={prompts}
          onChange={handleChange}
        ></textarea>
        <div className="btn button2" onClick={generate} visible={false}>
          SUBMIT
        </div>
       <div> {isLoading ? <Loader /> : null}</div>
      </div>
      {img && (
        <div className="output">
          <img src={img ? img : ""} alt="img" />
        </div>
      )}
    </div>
  );
};

export default prompts;
