import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function Experience() {
  const animated = useWindowPosition("myHeader", 0.6);

  return (
    <div
      id="myExp"
      className="w-full lg:w-11/12 xl:w-10/12 mx-auto mb-16 px-6 flex flex-col items-center justify-center min-h-screen"
    >
      <h1
        className={`uppercase transform transition duration-2000 text-5xl mb-10 md:mb-12 ${
          animated ? "" : "translate-y-10 opacity-0"
        }`}
      >
        {content.exp.title}
      </h1>
      {content.exp.jobs.map((job, index1) => {
        return (
          <div
            key={index1}
            className={`w-full pb-10 mb-10 job-wrap job-${index1 + 1}`}
          >
            <div className="job-inner flex flex-col md:flex-row justify-between items-center mb-6">
              <h3 className="job-company txt-Montserrat--semibold text-3xl m-0 pr-12">
                {job.company}
              </h3>
              <h4 className="job-time txt-Montserrat--semibold text-2xl m-0">
                {job.time}
              </h4>
            </div>
            <p className="job-position txt-Montserrat--semibold--italic text-lg mb-4">
              Position: {job.position}
            </p>
            <p className="job-desc mb-4">{job.desc}</p>
            {job.details ? (
              <div className="job-details mb-4 ml-4 md:ml-8 lg:ml-12">
                <ul className="custom-ul">
                  {job.details.map((detail, index2) => {
                    return (
                      <li key={index2}>
                        <span>{detail}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
            {job.projects ? (
              <p className="job-projects">
                <span className="inline-block mr-4">Some projects:</span>
                {job.projects.map((project, index3) => {
                  return (
                    <a
                      key={index3}
                      href={project.href}
                      rel="noreferrer"
                      target="_blank"
                      className="inline-block mr-4"
                    >
                      {project.alt},
                    </a>
                  );
                })}
                .....
              </p>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
