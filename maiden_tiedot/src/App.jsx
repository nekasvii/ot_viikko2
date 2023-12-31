// Teht 2.19 maiden tiedot step2
// muokataan edellistä versiota
// jokaisen listattavan maan viereen nappi,
// josta klikkaamalla saa ks. maan tiedot esiin
// Teht 2.19 VALMIS

// Teht 2.20 maiden tiedot step3
// lisätään jokaisen maan yhteyteen pääkaupungin säätiedot
// sivustolta https://openweathermap.org/
// Teht 2.20 VALMIS

// HUOM! koodi hakee API:sta maiden kaikista käännöksistä
// eli esimerkiksi suomi tulee haussa, kun kirjoittaa suomi tai finland

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Filter from './components/Filter'
import Error from './components/Error'
import CountryInformation from './components/CountryInformation'

const App = () => {
  const [newCondition, setNewCondition] = useState('')
  const [countries, setCountries] = useState([])
  const [clickedCountry, setClickedCountry] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (newCondition) {
      const findData = async () => {
        try {
          const response = await axios.get(`https://restcountries.com/v3.1/name/${newCondition}`)
          if (response.data.length > 10) {
            setErrorMessage(`Too many matches, specify another filter`)
            setCountries([]) 
            console.log('too many matches')
          } else {
            setCountries(response.data) 
            setErrorMessage('')
          }
        } catch (error) {
          console.error('Error finding data: ', error)
          setErrorMessage('Error finding data')
        }
      }
      findData()
    }
  }, [newCondition])
  

  const handleSearch = (event) => {
    const condition = event.target.value
    setNewCondition(condition)
    setClickedCountry(null)
  }

  const handleCountryClick = (country) => {
    setClickedCountry(country)
  }

  return (
    <div>
      <Filter newCondition={newCondition} handleSearch={handleSearch} />
      {clickedCountry && <CountryInformation country={clickedCountry} />}
      {countries.length === 1 && !clickedCountry && <CountryInformation country={countries[0]} />}
      {countries.length > 1 && countries.map((country, index) => (
        <div key={index}>
          {country.name.common}
          <button onClick={() => handleCountryClick(country)}>show</button>
        </div>
      ))}
      <Error message={errorMessage} />
    </div>
  )
}

export default App