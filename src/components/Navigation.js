import React from "react";
import { Link as ScrollLink } from "react-scroll";
import content from "../content";

export default function Navigation() {
  return (
    <div className="fixed top-0 w-screen z-40">
      <div className="flex items-center w-10/12 mx-auto py-3">
        <ScrollLink
          to="header"
          smooth={true}
          className="flex-1 w-auto cursor-pointer h-16"
        >
          <img
            src={content.nav.logo.img}
            alt={content.nav.logo.title}
            className="w-auto h-auto max-w-full max-h-full"
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
