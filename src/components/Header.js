import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link as ScrollLink } from "react-scroll";
import Typical from "react-typical";
import content from "../content";
import useStartAnimation from "../hook/useStartAnimation";

export default function Header() {
  const transition = (duration = 300, delay = 0) =>
    `transition duration-${duration} delay-${delay} ease-out`;
  const styleFade = "opacity-0";
  const animated = useStartAnimation();

  return (
    <div
      id="myHeader"
      className="w-full lg:w-11/12 xl:w-10/12 mx-auto mb-16 px-6 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="w-full text-center md:text-left">
        <h2
          className={`text-2xl md:text-4xl lg:text-5xl ${
            animated ? "opacity-1" : styleFade
          } ${transition(1000, 0)}`}
        >
          {content.header.text[0]}
        </h2>
        <h1
          className={`text-2xl md:text-4xl lg:text-6xl ${
            animated ? "opacity-1" : styleFade
          } ${transition(1000, 150)}`}
        >
          {content.header.text[1]}
          <Typical
            steps={content.header.typical}
            loop={Infinity}
            className="inline-block"
            wrapper="p"
          />
        </h1>
        <ScrollLink
          to="myWork"
          smooth={true}
          className={`btn-style--gold mt-5 ${
            animated ? "opacity-1" : styleFade
          } ${transition(1000, 300)}`}
        >
          {content.header.btnText}
        </ScrollLink>
      </div>
    </div>
  );
}
