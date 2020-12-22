import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Tilt from "react-parallax-tilt";
import { SRLWrapper } from "simple-react-lightbox";
import content from "../content";

export default function Stack() {
  return (
    <div
      id="myStack"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl font-bold mb-10">Stack I use</h1>
      <div>
        <div className="flex flex-wrap justify-center">
          {content.stack.tech.map((tech, index) => {
            return (
              <p
                key={index}
                className={`w-40 h-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 ${
                  index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
                }`}
              >
                <LazyLoadImage
                  className="w-auto h-auto max-w-full max-h-full"
                  effect="blur"
                  src={tech.img}
                  alt={tech.alt}
                />
              </p>
            );
          })}
        </div>
        <SRLWrapper>
          <div className="flex flex-wrap justify-center">
            {content.stack.tech.map((tech, index) => {
              return (
                <Tilt key={index}>
                  <a
                    className={`w-40 h-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 ${
                      index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
                    }`}
                    href={tech.img}
                  >
                    <img
                      className="w-auto h-auto max-w-full max-h-full"
                      src={tech.img}
                      alt={tech.alt}
                    ></img>
                  </a>
                </Tilt>
              );
            })}
          </div>
        </SRLWrapper>
      </div>
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl">
        {content.stack.desc}
      </p>
    </div>
  );
}
