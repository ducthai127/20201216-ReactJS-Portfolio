import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function Portfolio() {
  const animated = useWindowPosition("myHeader", 0.5, 5);

  return (
    <div
      id="myPort"
      className="w-full lg:w-11/12 xl:w-10/12 mx-auto px-6 pt-24 pb-32 sm:pt-16 min-h-0 sm:min-h-screen flex flex-col items-center justify-center"
    >
      <h1
        className={`uppercase transform transition duration-2000 text-center lg:text-left text-4xl md:text-5xl mb-8 md:mb-10 ${
          animated ? "" : "opacity-0"
        }`}
      >
        {content.portfolio.title}
      </h1>
      <SRLWrapper>
        <div className="w-full flex flex-wrap">
          {content.portfolio.projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`project-item py-4 px-0 w-full md:w-3/6 md:p-4 lg:w-2/6 transform transition duration-2000 ${
                  animated ? "" : "opacity-0"
                }`}
              >
                <div className="project-item-inner w-full h-full">
                  <div
                    className="project-item-lightbox w-full h-full overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.img})`,
                    }}
                  >
                    <a
                      className="inline-block w-full h-full"
                      href={project.img}
                    >
                      <img
                        className="w-full h-auto"
                        src={project.img}
                        alt={project.alt}
                      />
                    </a>
                  </div>
                  <p className="project-item-link">
                    <a rel="noreferrer" target="_blank" href={project.href}>
                      {project.alt}
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SRLWrapper>
    </div>
  );
}
