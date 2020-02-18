import React from "react";
export default function Pet({ name, animal, breed }) {
  return (
    <div key="kiran">
      <h1 key="name">Name :{name.toUpperCase()}</h1>
      <h2 key="animal">{animal}</h2>
      <h3 key="breed">{breed}</h3>
    </div>
  );
}
