import React from "react";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function Skills() {
  const animated = useWindowPosition("myHeader", 0.5, 3);

  return (
    <div
      id="mySkills"
      className="w-full lg:w-11/12 xl:w-10/12 mx-auto px-6 pt-24 sm:pt-16 min-h-0 sm:min-h-screen flex flex-col items-center justify-center"
    >
      <h1
        className={`uppercase transform transition duration-2000 text-center lg:text-left text-4xl md:text-5xl mb-8 md:mb-10 ${
          animated ? "" : "opacity-0"
        }`}
      >
        {content.skill.title}
      </h1>
      <ul
        className={`custom-ul transform transition duration-2000 ${
          animated ? "" : "opacity-0"
        }`}
      >
        {content.skill.skills.map((skill, index) => {
          return (
            <li key={index}>
              <span>{skill}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
