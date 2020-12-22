import React from "react";
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
      className="w-full lg:w-11/12 xl:w-10/12 mx-auto px-6 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="w-full text-center lg:text-left">
        <h2
          className={`text-3xl md:text-4xl ${
            animated ? "opacity-1" : styleFade
          } ${transition(1000, 0)}`}
        >
          {content.header.text[0]}
        </h2>
        <h1
          className={`text-4xl md:text-5xl ${
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
        <p
          className={`inline-flex flex-col-reverse sm:inline-block mt-6 ${
            animated ? "opacity-1" : styleFade
          } ${transition(1000, 300)}`}
        >
          <ScrollLink
            to="myAbout"
            smooth={true}
            className="btn-style--green mt-6 sm:mt-0 mr-0 sm:mr-4 md:mr-12 animate-bounce"
            style={{
              animationDuration: "3s",
              animationDelay: "1.2s",
            }}
          >
            {content.header.btnScroll}
          </ScrollLink>
          <a
            className="btn-style--gold animate-bounceFirst"
            style={{
              animationDuration: "3s",
            }}
            href={content.header.btnToCvPDF.href}
            rel="noreferrer"
            target="_blank"
          >
            {content.header.btnToCvPDF.text}
          </a>
        </p>
      </div>
    </div>
  );
}
