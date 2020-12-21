import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function Work() {
  const animated = useWindowPosition("header", 0.6);
  return (
    <div
      id="myWork"
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        background: "#FEFEFE",
      }}
    >
      <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10">I have done</p>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img}
          alt="phone prototype"
          className="m-10 transition duration-2000 ease-in-out z-10 md:w-3/5 w-4/5"
        ></LazyLoadImage>
      </div>
    </div>
  );
}
