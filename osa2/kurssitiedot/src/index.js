import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {key: 1, name: 'Fundamentals of React', exercises: 10}, 
      {key: 2, name: 'Using props to pass data', exercises: 7},
      {key: 3, name: 'State of a component', exercises: 14},
      {key: 4, name: 'Redux', exercises: 11}
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))