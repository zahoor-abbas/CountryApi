import React from 'react'
import { useState } from "react";

import SearchBox from '../Component/SearchBox';
import SelectMenu from '../Component/SelectMenu';
import CountriesContainer from '../Component/CountriesContainer';

const Home = () => {
  const [query, setQuery] = useState("");
  const [queryy, setQueryy] = useState("");
  return (
    <main>
    <div className="search-filter-container">
      <SearchBox setQuery={setQuery} />
      <SelectMenu setQueryy={setQueryy} />
    </div>
    <CountriesContainer query={query} queryy={queryy} />
  </main>
  )
}

export default Home
