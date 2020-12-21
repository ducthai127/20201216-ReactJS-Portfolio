import React from "react";
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
          className="text-3xl font-bold text-white flex-1 cursor-pointer"
        >
          <h1>
            {content.nav.logo}
            <span className="w-3 h-3 bg-red-400 inline-block ml-2 rounded-full"></span>
          </h1>
          <div>
            {content.nav.links.map((link, index) => {
              return (
                <span key={index} className="text-xl mr-4">
                  {link.text}
                </span>
              );
            })}
          </div>
        </ScrollLink>
      </div>
    </div>
  );
}
