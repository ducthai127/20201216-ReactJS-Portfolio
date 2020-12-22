import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import SmoothScroll from "smoothscroll-for-websites";
import About from "./components/About";
import BackGround from "./components/BackGround";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stack from "./components/Stack";
import Experience from "./components/Experience";

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
      <SimpleReactLightbox>
        <Stack />
      </SimpleReactLightbox>
    </>
  );
}

export default App;
