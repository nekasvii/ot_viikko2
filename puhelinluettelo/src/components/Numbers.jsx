// vastaa nimien ja numeroiden tulostuksesta näytölle

const Numbers = ({ filteredPersons }) => {

  return (
    <div>
      {filteredPersons.map((person) => (<p key={person.name}>{person.name} {person.number}</p>))}
    </div>
  )
}

export default Numbers