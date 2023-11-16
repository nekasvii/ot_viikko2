// teht 2.8 puhelinluettelo step3
// lisätään toiseen inputtiin numeroiden tallennus
// lisätty myös uusi tapahtumakäsittelijä ja
// addNumberiin kaikki tarpeellinen puhelinnumeron tallentamiseen

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ { name: 'Arto Hellas' } ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      };
    
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
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
      {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App