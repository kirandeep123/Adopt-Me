import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return React.createElement("div", { id: "something-veryimportant" }, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Shila",
      animal: "Billi",
      breed: "Haryana"
    }),
    React.createElement(Pet, {
      name: "Munii",
      animal: "Sexy",
      breed: "Mumabian"
    })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
