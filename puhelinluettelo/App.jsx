// teht 2.6 puhelinluettelo step1
// toteutetaan puhelinluettelon tulostus 
// toteutetaan henkilön lisäys luetteloon

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ { name: 'Arto Hellas' } ]) 
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    console.log("saved", persons)
    const newObject = {
      name: newName,
    }
    setPersons(persons.concat(newObject))
    setNewName('')
  }

  const handdleNumberChange = (event) => {
    setNewName(event.target.value)
  }

  console.log(persons.name)
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