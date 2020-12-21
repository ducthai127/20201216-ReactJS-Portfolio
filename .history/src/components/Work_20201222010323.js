import React from "react";
import content from "../content";
import useWindowPosition from "../hook/useWindowPosition";

export default function Work() {
  const animated = useWindowPosition("header", 0.6);
  return (
    <div id="myWork">
      <h1>{content.work.title}</h1>
    </div>
  );
}
