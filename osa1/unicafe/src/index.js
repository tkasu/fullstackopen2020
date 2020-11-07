import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({text, handleClick}) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  const Header = () => {
    return (
      <div>
        <h1>give feedback</h1>
      </div>
    )
  }

  const Statistics = ({good, neutral, bad}) => {
    const count = good + neutral + bad
    
    let average = 0
    let pos_fraction = 0
    if (count != 0) {
      average = ((1 * good) + (-1 * bad)) / count
      pos_fraction = good / count
    }
    
    return (
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {count}</p>
        <p>average {average}</p>
        <p>positive {pos_fraction * 100} %</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)