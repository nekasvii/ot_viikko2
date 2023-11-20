// Teht 2.18 maiden tiedot step1
// rakennetaan sovellus, joka osaa hakea tietoa 
// erimaista ositteesta: https://studies.cs.helsinki.fi/restcountries/api/all
// näytölle näytetään max 10 maan nimet hakuehdon mukaan
// kun maita on 1, näytetään ks. maan tiedot
// useEffectin avulla haetaan maiden nimistä hakuehdon muuttuessa

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Filter from './components/Filter'
import Error from './components/Error'
import CountryInformation from './components/CountryInformation'

const App = () => {
  const [newCondition, setNewCondition] = useState('')
  const [countries, setCountries] = useState([])
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
  }

  return (
    <div>
      <Filter newCondition={newCondition} handleSearch={handleSearch} />
      {countries.length === 1 && <CountryInformation country={countries[0]} />}
      {countries.length > 1 && countries.map((country, index) => (
        <div key={index}>{country.name.common}</div>
      ))}
      <Error message={errorMessage} />
    </div>
  )
}

export default App