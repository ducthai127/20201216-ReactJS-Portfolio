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
      <Stack />
      <Work />
    </div>
  );
}

export default App;
