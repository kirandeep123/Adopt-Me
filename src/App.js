const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed)
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
