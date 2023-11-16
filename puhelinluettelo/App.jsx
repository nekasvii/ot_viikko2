// teht 2.7 puhelinluettelo step2
// rakennetaan dublikaattinimien tarkastus
// estetään dublikaattien tallennus
// annetaan ilmoitus dublikaattitallennusyrityksestä

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ { name: 'Arto Hellas' } ]) 
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
    }

    const dublicatePerson = persons.find((person) => person.name === newName);

    if (dublicatePerson) {

      alert(`${newName} is already added to phonebook.`);
      console.log("ilmoitus dublikaatista")

    } else {
      const newObject = {
        name: newName,
      };
    
      setPersons(persons.concat(newObject))
      setNewName('')
      
      console.log("saved ", newName)
    }
  }

  const handdleNumberChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input
            value={newName}
            onChange={handdleNumberChange} 
          />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App