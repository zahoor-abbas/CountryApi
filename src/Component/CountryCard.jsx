import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({name,population,region,capital,flag}) => {
  return (
    <div>
      <Link className="country-card" to={`/${name}`}>
        <img src={flag} alt="South Korea flag" />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>{population}
          </p>
          <p>
            <b>Region: </b>{region}
          </p>
          <p>
            <b>Capital: </b>{capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
