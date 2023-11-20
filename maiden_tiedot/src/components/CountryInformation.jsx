// komponentti yksittäisen maan tietojen näyttämiselle

import React from 'react';

const CountryInformation = ({ country }) => {
  console.log('founded ', country.name.common)

  const listLanguages = (languages) => {
    return Object.entries(languages).map(([key, value]) => (
      <li key={key}>{value}</li> 
    ))
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      capital: {country.capital[0]} <br />
      area: {country.area}
      <h2>languages:</h2>
      <ul>
        {listLanguages(country.languages)} 
      </ul>
      <img src= {country.flags.png} alt={`the flag of ${country.name.common}`} />
    </div>
  )
}

export default CountryInformation