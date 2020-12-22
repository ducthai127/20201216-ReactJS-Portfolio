import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { SRLWrapper } from "simple-react-lightbox";
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
        <div className="flex flex-wrap justify-center">
          {content.stack.tech.map((tech, index) => {
            return (
              <span
                key={index}
                className={`w-40 h-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 ${
                  index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
                }`}
              >
                <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
              </span>
            );
          })}
        </div>
        <SRLWrapper>
          <div className="flex flex-wrap justify-center">
            {content.stack.tech.map((tech, index) => {
              return (
                <a
                  href={tech.img}
                  key={index}
                  className={`w-40 h-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 ${
                    index % 2 === 0 ? "animate-bounce" : "animate-bounceFirst"
                  }`}
                >
                  <img src={tech.img} alt={tech.alt}></img>
                </a>
              );
            })}
          </div>
        </SRLWrapper>
      </div>
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis">
        {content.stack.desc}
      </p>
    </div>
  );
}
