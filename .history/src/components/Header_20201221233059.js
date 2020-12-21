import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import Typical from "react-typical";

export default function Header() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#091c29",
      }}
    >
      <div>
        <div>
          <LazyLoadImage src={content.header.img} effect="blur" />
        </div>
        <div className="text-white">
          <h2>
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1>
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <button>{content.header.btnText}</button>
        </div>
      </div>
    </div>
  );
}
