import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <li>{props.part.name} {props.part.exercises}</li>
  )
}

const Content = (props) => {
  return (
    <div>
      <ul>
        {props.course.parts.map(
          (part) => <Part key={part.key.toString()} part={part}/>
        )}
      </ul>
    </div>
    )
}

const Total = (props) => {
  const total_exercises = props.course.parts.reduce((acc, next) => acc + next.exercises, 0)

  return (
    <div>
      <p>Number of exercises {total_exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {key: 1, name: 'Fundamentals of React', exercises: 10}, 
      {key: 2, name: 'Using props to pass data', exercises: 7},
      {key: 3, name: 'State of a component', exercises: 14}
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))