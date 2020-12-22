import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stack from "./components/Stack";
import Work from "./components/Work";
import SimpleReactLightbox from "simple-react-lightbox";
import { SmoothScroll } from "smoothscroll-for-websites";

function App() {
  SmoothScroll({ stepSize: 20 });
  return (
    <>
      <Navigation />
      <Header />
      <Work />
      <SimpleReactLightbox>
        <Stack />
      </SimpleReactLightbox>
      <Contact />
    </>
  );
}

export default App;
