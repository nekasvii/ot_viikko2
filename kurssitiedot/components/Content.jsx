// käydään kurssin osakurssit läpi ja mapataan ne
// keynä toimii kurssin id (tässä tapauksessa myös nimi kävisä)

import Part from './Part'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

export default Content