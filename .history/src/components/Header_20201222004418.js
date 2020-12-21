import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";
import useStartAnimation from "../hook/useStartAnimation";

export default function Header() {
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = "translate-y-10 opacity-0";
  const animated = useStartAnimation();

  return (
    <div
      id="header"
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#091c29",
      }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
        <div className="w-full md:w-2/5">
          <LazyLoadImage
            src={content.header.img}
            alt="profile"
            className="w-full mx-auto"
            effect="blur"
            placeholderSrc={content.header.imgPlaceholder}
          />
        </div>

        <div className="font-dosis w-full md:w-3/5 text-center md:text-left">
          <h2te
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${
              animated ? "translate-y-0" : styleTranslate
            } ${transition(2000)}`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-1000 ease-in-out font-bold text-2xl text-gray-500`}
          >
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className="animate-bounce bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
