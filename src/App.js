import React from "react";
import SmoothScroll from "smoothscroll-for-websites";
import SimpleReactLightbox from "simple-react-lightbox";

import BackGround from "./components/BackGround";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";

function App() {
  SmoothScroll({
    animationTime: 1270, // [ms]
    stepSize: 70, // [px]
  });
  
  return (
    <>
      <BackGround />
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <SimpleReactLightbox>
        <Portfolio />
      </SimpleReactLightbox>
    </>
  );
}

export default App;
