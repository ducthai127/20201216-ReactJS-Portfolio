import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";

export default function Stack() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-dosis">
      <h1 className="text-5xl font-bold">Stack I use</h1>
      <div className="flex flex-wrap justify-center">
        {content.stack.tech.map((tech, index) => {
          return (
            <span className="w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p>{content.stack.desc}</p>
    </div>
  );
}