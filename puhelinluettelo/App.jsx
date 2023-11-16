// teht 2.9 puhelinluettelo step4
// lisätään lomakkeelle hakukenttä, jolla rajataan näytettäviä nimiä

import { useState } from 'react'

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
    const newObject = {
      name: newName,
      number: newNumber,
    }

    const dublicatePerson = persons.find((person) => person.name === newName);

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
    }
  }

  const handdleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handdleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handdleSearch = (event) => {
    const condition = event.target.value
    setNewCondition(condition)
  
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(condition.toLowerCase())
    )
    
    setFilteredPersons(filtered)
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          filter shown with <input
            value={newCondition}
            onChange={handdleSearch}
          />
        </div>
        <div>
          <h2>Add a new</h2>
          name: <input
            value={newName}
            onChange={handdleNameChange} 
          /> <br />
          number: <input
            value={newNumber}
            onChange={handdleNumberChange}
          /> <br />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {filteredPersons.map((person) => (<p key={person.name}>{person.name} {person.number}</p> ))}    
  </div>
  )
}

export default App