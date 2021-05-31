const Course = ({course}) => (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
)

const Header = ({course}) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <li>{part.name} {part.exercises}</li>
    )
  }
  
  const Content = ({course}) => {
    return (
      <div>
        <ul>
          {course.parts.map(
            (part) => <Part key={part.id.toString()} part={part}/>
          )}
        </ul>
      </div>
      )
  }
  
  const Total = ({course}) => {
    const total_exercises = course.parts.reduce((acc, next) => acc + next.exercises, 0)
  
    return (
      <div>
        <p style={{fontWeight: 'bold'}}>
            Total of {total_exercises} exercises.
        </p>
      </div>
    )
  }

  export default Course;