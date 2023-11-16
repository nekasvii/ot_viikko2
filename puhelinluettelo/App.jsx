// teht 2.10 puhelinluettelo step5
// eriytetään sovellus komponentteihin (väh 3)
// tila- ja tapahtumakäsittelijät App
// lomakkeen tiedot eivät suostuneet päivittymään komponenttijaon myötä
// joten pakotettu koodi useEffectin avulla päivittämään lista


import { useState } from 'react'
import { useEffect } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newCondition, setNewCondition] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const addNumber = (event) => {
    event.preventDefault()

    const dublicatePerson = persons.find((person) => person.name === newName);
    const newObject = {
      name: newName,
      number: newNumber,
    }

    if (dublicatePerson) {

      alert(`${newName} is already added to phonebook.`);
      console.log("ilmoitus dublikaatista")

    } else {
      const newObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newObject))
      setNewName('')
      setNewNumber('')
      
      console.log("saved ", newName, newNumber)
      console.log(persons)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    const condition = event.target.value
    setNewCondition(condition)
  
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(condition.toLowerCase())
    )
    
    setFilteredPersons(filtered)
  }

  useEffect(() => {setFilteredPersons(persons)}, [persons])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newCondition={newCondition} handleSearch={handleSearch} />
      <div>
      <h2>Add a new</h2>
        <PersonForm
          newName={newName}
          newNumber={newNumber}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          addNumber={addNumber}
        />
      </div>

      <h2>Numbers</h2>
      <Numbers filteredPersons={filteredPersons} /> 
    </div>
  )
}

export default App