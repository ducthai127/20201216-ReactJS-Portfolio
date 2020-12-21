import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";

export default function Stack() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: "#eee",
      }}
    >
      <h1 className="text-5xl font-dosis font-bold mb-10">Stack I use</h1>
      <div>
        <div className="flex flex-wrap justify-center mt-10">
          {content.stack.tech.map((tech, index) => {
            return (
              <span
                className={`${
                  index % 2 === 0 ? "animate-bounce" : "animate-bounceFirst"
                } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5`}
              >
                <LazyLoadImage src={tech.img} alt={tech.alt} />
              </span>
            );
          })}
        </div>
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
        {content.stack.desc}
      </p>
    </div>
  );
}