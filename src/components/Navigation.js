import React from "react";
import { Link as ScrollLink } from "react-scroll";
import content from "../content";
import useStartAnimation from "../hook/useStartAnimation";

export default function Navigation() {
  const transition = (duration = 300, delay = 0) =>
    `transition duration-${duration} delay-${delay} ease-out`;
  const styleFade = "opacity-0";
  const animated = useStartAnimation();

  return (
    <div id="myNav" className="fixed top-0 z-40 w-full">
      <div className="flex items-center w-full px-6 py-3 lg:w-11/12 xl:w-10/12 mx-auto">
        <ScrollLink
          to="myHeader"
          smooth={true}
          className="flex-1 w-auto cursor-pointer h-12"
        >
          <img
            src={content.nav.logo.img}
            alt={content.nav.logo.title}
            className="w-auto h-auto max-w-full max-h-full"
          />
        </ScrollLink>
        <div className="menu-items txt-Baloo2--medium txt-color--green text-xl hidden sm:block">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink
                key={index}
                to={link.to}
                smooth={true}
                className={`ml-6 md:ml-8 lg:ml-10 ${
                  animated ? "opacity-1" : styleFade
                } ${transition(1000, 100 * index)}`}
              >
                <span>{link.text}</span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
