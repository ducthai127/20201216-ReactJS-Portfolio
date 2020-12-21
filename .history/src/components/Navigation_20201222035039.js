import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link as ScrollLink } from "react-scroll";
import content from "../content";

export default function Navigation() {
  return (
    <div
      className="font-dosis fixed top-0 w-screen z-40"
      style={{
        background: "#091c29",
      }}
    >
      <div className="flex items-center w-10/12 mx-auto py-3">
        <ScrollLink
          to="header"
          smooth={true}
          className="w-30 h-30  cursor-pointer"
        >
          <img
            src={content.nav.logo.img}
            alt={content.nav.logo.title}
            className=""
          />
        </ScrollLink>
        <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span key={index} className="mr-4 cursor-pointer">
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
