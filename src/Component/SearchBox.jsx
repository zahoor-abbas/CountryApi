import React from "react";

const SearchBox = ({ setQuery }) => {
  const searchvalue = ((e) => setQuery(e.target.value.toLowerCase()))
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input 
        type="text" 
        placeholder="Search for a country..."  
        onChange={searchvalue}
      />
    </div>
  );
};

export default SearchBox;
