import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function About() {
  const animated = useWindowPosition("myHeader", 0.5, 1);

  return (
    <div
      id="myAbout"
      className="w-full lg:w-11/12 xl:w-10/12 mx-auto px-6 pt-0 sm:pt-16 min-h-0 sm:min-h-screen flex flex-col items-center justify-center"
    >
      <h1
        className={`uppercase transform transition duration-2000 text-center lg:text-left text-4xl md:text-5xl mb-8 md:mb-10 ${
          animated ? "" : "opacity-0"
        }`}
      >
        {content.about.title}
      </h1>
      <div
        style={{
          minHeight: "50vh",
        }}
        className="w-full flex flex-col lg:flex-row"
      >
        <div className="w-full lg:w-2/5 pt-0 pb-8 lg:pt-1 lg:pb-0 text-center lg:text-left">
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
          />
        </div>
        <div className="w-full lg:w-3/5">
          <p
            className={`mb-6 transform transition duration-2000 ${
              animated ? "" : "opacity-0"
            }`}
          >
            {content.about.desc}
          </p>

          <div
            className={`mb-6 transform transition duration-2000 ${
              animated ? "" : "opacity-0"
            }`}
          >
            {content.about.infos.map((info, index) => {
              return (
                <p key={index} className="mb-4 flex">
                  <span className="txt-Montserrat--semibold pr-4 min-width-150">
                    {info.th}:
                  </span>
                  <span>
                    {info.action ? (
                      <a href={info.action}>{info.td}</a>
                    ) : (
                      info.td
                    )}
                  </span>
                </p>
              );
            })}
          </div>

          <div
            className={`flex transform transition duration-2000 ${
              animated ? "" : "opacity-0"
            }`}
          >
            {content.about.socials.map((social, index) => {
              return (
                <a
                  href={social.href}
                  rel="noreferrer"
                  target="_blank"
                  key={index}
                  className="w-12 h-12 mr-4 transform hover:scale-110"
                >
                  <LazyLoadImage
                    effect="blur"
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
