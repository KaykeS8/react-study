import React from "react";
import { Slide } from "./Slide";

const App = () => {
  const Slides = [
    {
      id: "slide1",
      text: "Slide1",
    },
    {
      id: "slide2",
      text: "Slide2",
    },
    {
      id: "slide3",
      text: "Slide3",
    },
  ];

  return (
    <div>
      <Slide slides={Slides} />
    </div>
  );
};

export default App;
