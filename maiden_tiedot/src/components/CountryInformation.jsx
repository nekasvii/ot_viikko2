// komponentti yksittäisen maan tietojen näyttämiselle
// lisätään vielä säätiedon hakeminen sivustolta: https://openweathermap.org/
// apiKey on määritetty koneessani ympäristömuuttujana

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryInformation = ({ country }) => {
  const [weather, setWeather] = useState(null) 

  const ListLanguages = (languages) => {
    return Object.entries(languages).map(([key, value]) => (
      <li key={key}>{value}</li>
    ))
  }

  useEffect(() => {
    const findWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_SOME_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${apiKey}&units=metric`
        const response = await axios.get(url)
        setWeather(response.data)
      } catch (error) {
        console.error('Error finding weather data', error)
      }
    }
    findWeather()
  }, [country.capital])

  return (
    <div>
      <h1>{country.name.common}</h1>
      capital: {country.capital[0]} <br />
      area: {country.area}
      <h2>languages:</h2>
      <ul>
        {ListLanguages(country.languages)}
      </ul>
      <img src={country.flags.png} alt={`the flag of ${country.name.common}`} />
      <h2>Weather in {country.capital[0]}</h2>
      {weather && (
        <div>
          <p>Temperature: {weather.main.temp} °C</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].description}`} />
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default CountryInformation;
