// tulostaa tiedon kaikkien harjoitusten määrästä
// kokonaismäärä lasketaan reduce-funktion avulla

const Total = ({ points }) => {

  const totalPoints = points.reduce(function(total, part) {
    return total + part.exercises
  }, 0)

  return (
    <p>
      total of {totalPoints} exercises
    </p>
  )
}
export default Total