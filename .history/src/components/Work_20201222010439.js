import React from "react";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function Work() {
  const animated = useWindowPosition("header", 0.6);
  return (
    <div
      id="myWork"
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        background: "#FEFEFE",
      }}
    >
      <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
    </div>
  );
}
