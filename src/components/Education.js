import React from "react";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function Education() {
  const animated = useWindowPosition("myHeader", 0.5, 4);

  return (
    <div
      id="myEdu"
      className="w-full lg:w-11/12 xl:w-10/12 mx-auto px-6 pt-24 sm:pt-16 min-h-0 sm:min-h-screen flex flex-col items-center justify-center"
    >
      <h1
        className={`uppercase transform transition duration-2000 text-center lg:text-left text-4xl md:text-5xl mb-8 md:mb-10 ${
          animated ? "" : "opacity-0"
        }`}
      >
        {content.edu.title}
      </h1>
      {content.edu.courses.map((course, index) => {
        return (
          <div
            key={index}
            className={`w-full pb-10 mb-10 course-wrap course-${
              index + 1
            } transform transition duration-2000 ${
              animated ? "" : "opacity-0"
            }`}
          >
            <div className="course-inner flex flex-col lg:flex-row text-center lg:text-left justify-between items-center mb-6">
              <h3 className="course-position txt-Montserrat--semibold text-2xl sm:text-3xl md:text-4xl mb-4 lg:mb-0 pr-0 lg:pr-12">
                {course.position}
              </h3>
              <h4 className="course-time txt-Montserrat--semibold text-2xl md:text-3xl mb-0">
                {course.time}
              </h4>
            </div>
            <p className="course-school txt-Montserrat--semibold--italic text-lg mb-4">
              {course.school}
            </p>
            <p className="course-desc mb-4">{course.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
