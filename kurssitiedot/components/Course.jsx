// käyttää apunaan Header ja Content
// Header tuottaa koko kurssin nimen
// Content osakurssit

import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
  console.log("kurssi ja osat ", course.name, course.parts)    
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total points={course.parts} />
    </div>
  )
}

export default Course