import React from 'react';
import CountryCard from './CountryCard';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CountriesContainer = ({ query, queryy }) => {
  const { data: countries, error, isValidating } = useSWR('https://restcountries.com/v3.1/all', fetcher);

  if (error) return <div className='failed'>Failed to load data</div>;
  if (isValidating) return <div className="loading">Loading...</div>;

  return (
    <div className='countries-container'>
      {countries
        .filter((country) => 
          country.name.common.toLowerCase().includes(query.toLowerCase()) 
         
        )
        .filter((country) =>  (queryy === '' || country.region.toLowerCase() === queryy))
        .map((country) => (
          <CountryCard 
            key={country.cca3} 
            name={country.name.common} 
            population={country.population} 
            region={country.region} 
            capital={country.capital ? country.capital[0] : 'N/A'} 
            flag={country.flags.svg} 
          />
        ))
      }
    </div>
  );
}

export default CountriesContainer;
