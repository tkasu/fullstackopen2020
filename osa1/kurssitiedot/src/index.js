import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => {
        return <p key={part.key}>{part.name} {part.exercises}</p>
      })}
    </div>
    )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {key: 1, name: 'Fundamentals of React', exercises: 10}, 
    {key: 2, name: 'Using props to pass data', exercises: 7},
    {key: 3, name: 'State of a component', exercises: 14}]
  const total_exercises = parts.reduce((acc, next) => acc + next.exercises, 0)

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={total_exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))