import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import SmoothScroll from "smoothscroll-for-websites";
import About from "./components/About";
import BackGround from "./components/BackGround";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

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
      <Experience />
      <Skills />
      <Education />
      <SimpleReactLightbox>
        <Portfolio />
      </SimpleReactLightbox>
    </>
  );
}

export default App;
