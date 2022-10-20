import React from "react";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function Experience() {
  const animated = useWindowPosition("myHeader", 0.5, 2);

  return (
    <div
      id="myExp"
      className="w-container mx-auto px-6 pt-24 sm:pt-16 min-h-0 sm:min-h-screen flex flex-col items-center justify-center"
    >
      <h1
        className={`uppercase transform transition duration-2000 text-center lg:text-left text-4xl md:text-5xl mb-8 md:mb-10 ${
          animated ? "" : "opacity-0"
        }`}
      >
        {content.exp.title}
      </h1>
      {content.exp.jobs.map((job, index1) => {
        return (
          <div
            key={index1}
            className={`w-full pb-10 mb-10 job-wrap job-${
              index1 + 1
            } transform transition duration-2000 ${
              animated ? "" : "opacity-0"
            }`}
          >
            <div className="job-inner flex flex-col lg:flex-row text-center lg:text-left justify-between items-center mb-6">
              <h3 className="job-company txt-Montserrat--semibold text-2xl sm:text-3xl md:text-4xl mb-4 lg:mb-0 pr-0 lg:pr-12">
                {job.company.url
                  ? <p><a
                      href={job.company.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {job.company.name}
                    </a></p>
                  : job.company.name
                }
              </h3>
              <h4 className="job-time txt-Montserrat--semibold text-2xl md:text-3xl mb-0">
                {job.time}
              </h4>
            </div>
            <p className="job-position txt-Montserrat--semibold--italic text-lg md:text-xl mb-4">
              Position: {job.position}
            </p>
            <p className="job-desc txt-Montserrat--semibold mb-4">{job.desc}</p>
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
                <span className="inline-block txt-Montserrat--semibold mr-4">Some projects:</span>
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

            {job.notable_project ? (
              <div className="job-notable_project">
                <p className="inline-block mt-6 txt-Montserrat--semibold--italic">
                  <span>Notable project: </span>
                  {job.notable_project.url
                    ? <a
                        href={job.notable_project.url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {job.notable_project.name}
                      </a>
                    : job.notable_project.name
                  }
                </p>

                <div className="job-notable_project-details">
                  {job.notable_project.details.map((item, index4) => {
                    return (
                      <div key={index4} className="mt-6 job-notable_project-item">
                        <p className="mb-3 ml-2 md:ml-4 lg:ml-6 txt-Montserrat--regular--italic">
                          {item.url
                            ? <a
                                href={item.url}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <span>{index4 + 1}. </span>{item.name}
                              </a>
                            : <><span>{index4 + 1}. </span>{item.name}</>
                          }
                        </p>
                        <div className="ml-4 md:ml-8 lg:ml-12 job-notable_project-item--detail">
                          <p className="mb-3 description"><span>- Description: </span>{item.description}</p>
                          <p className="mb-3 status"><span>- Status: </span>{item.status}</p>
                          <div className="responsibilities">
                            <p>- Responsibilities: </p>
                            <div className="ml-2 md:ml-4 lg:ml-6">
                              {item.responsibilities.map((res, index5) => {
                                return (
                                  <p key={index5} className="mt-3">+ {res}</p>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )
      })}
    </div>
  )
}
