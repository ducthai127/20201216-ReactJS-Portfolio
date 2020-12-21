import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";

export default function Stack() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Stack I use</h1>
      <div>
        {content.stack.tech.map((tech, index) => {
          return (
            <span className="w-40 h-40">
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
