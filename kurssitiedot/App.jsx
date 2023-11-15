// teht 2.5 kurssitiedot step9 + step10
// muutetaan koodi ymmärtämään useita kursseja
// eli se osaa tulostaa vastaavat tiedot, kuten aiemminkin
// mutta taulukkona saaduista useista kursseista
// apuna käytetään key-atribuuttia ja mappausta

// teht 2.5 ei tuo muutoksia v2.4 koodiin
// komponentti Course on omana moduulinaan, jonka App importtaa
// muut alikomponentit ovat omina komponentteinaan
// eikä niitä tarvinne laittaa yhteen moduuliin

import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => 
        <Course key={course.id} course={course} />)
      }
    </div>
  )
}

export default App