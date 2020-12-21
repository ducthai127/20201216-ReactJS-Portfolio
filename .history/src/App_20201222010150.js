import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stack from "./components/Stack";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Work />
      <Stack />
    </div>
  );
}

export default App;
