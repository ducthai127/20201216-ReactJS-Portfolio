import React from "react";
import useWindowPosition from "../hook/useWindowPosition";

export default function Work() {
  const animated = useWindowPosition("header", 0.6);
  return <div></div>;
}
