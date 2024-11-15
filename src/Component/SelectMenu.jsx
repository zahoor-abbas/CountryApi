import React from "react";

const SelectMenu = ({ setQueryy }) => {
  return (
    <select className="filter-by-region" onChange={(e) => setQueryy(e.target.value.toLowerCase())}>
      <option hidden>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default SelectMenu;
