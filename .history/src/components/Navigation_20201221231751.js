import React from "react";
import content from "../content";

export default function Navigation() {
  return (
    <div>
      <h1>{content.nav.logo}</h1>
      <div>
        {content.nav.links.map((link, index) => {
          return <span>{link.text}</span>;
        })}
      </div>
    </div>
  );
}
