import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";

export default function Header() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#091c29",
      }}
    >
      <div>
        <LazyLoadImage src={content.header.img} effect="blur" />
      </div>
      <div className="text-white">
        <h2>
          {content.header.text[0]}
          <br />
          {content.header.text[1]}
        </h2>
      </div>
    </div>
  );
}