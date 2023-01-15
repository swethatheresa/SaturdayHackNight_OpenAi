import React, { useEffect } from "react";
import "./gallery.css";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import axios from "axios";
const gallery = () => {
  const img = "abc";

  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://shn-api.vercel.app/content")
      .then((e) => {
        console.log(e.data[0].url);
        console.log(e.data[0].desc);
        setData(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="body">
      <div className="galleryp">
        <Navbar />
        <h1 className="headna h2">GALLERY</h1>
      </div>
      <div className="out">
        <div className="output1">
          <img src={data ? data[0].url : ""} alt="img" />
          <h1>{data ? data[0].desc : ""}</h1>
        </div>
        <div className="output1">
          <img src={data ? data[1].url : ""} alt="img" />
          <h1>{data ? data[1].desc : ""}</h1>
        </div>
        <div className="output1">
          <img src={data ? data[2].url : ""} alt="img" />
          <h1>{data ? data[2].desc : ""}</h1>
        </div>
      </div>
    </div>
  );
};

export default gallery;
