import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle,WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown] = useDropDown("Breed", "", breeds);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
