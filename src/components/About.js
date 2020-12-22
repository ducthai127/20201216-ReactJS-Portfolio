import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function About() {
  const animated = useWindowPosition("myHeader", 0.4, 1);

  return (
    <div
      id="myAbout"
      className="w-full lg:w-11/12 xl:w-10/12 mx-auto px-6 flex flex-col items-center justify-center min-h-screen"
    >
      <h1
        className={`transform transition duration-2000 text-5xl ${
          animated ? "" : "translate-y-10 opacity-0"
        }`}
      >
        {content.about.title}
      </h1>
      <div
        style={{
          minHeight: "50vh",
        }}
        className="w-full flex flex-col md:flex-row justify-between items-center"
      >
        <LazyLoadImage
          src={content.about.img}
          alt="avatar"
          style={{
            width: "auto",
            height: "auto",
            maxHeight: "270px",
            maxWidth: "270px",
            filter: "opacity(0.7)",
            borderRadius: "12px",
          }}
          effect="blur"
          className="transition duration-2000 ease-out mx-auto"
        />
        <div className="w-4/5 md:w-2/5 mt-5 transition duration-2000">
          <p
            className={`transform transition duration-3000 text-white text-2xl ${
              animated ? "" : "translate-y-10 opacity-0"
            }`}
          >
            {content.about.desc}
          </p>
          <div
            className={`flex transform transition duration-3000 ${
              animated ? "" : "translate-y-10 opacity-0"
            }`}
          >
            {content.about.socials.map((social, index) => {
              return (
                <a href={social.href} target="_blank" rel="nofollow">
                  <LazyLoadImage
                    effect="blur"
                    className="m-2"
                    width="50px"
                    src={social.img}
                    alt={social.alt}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
