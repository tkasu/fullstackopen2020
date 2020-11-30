import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const randomAnecdote = (anecdotes, selected, setSelected) => {
  const size = anecdotes.length

  if (size <= 1) {
    return
  }

  // to make sure that we always get a new one
  let rnd = selected
  while (rnd === selected) {
    rnd = Math.floor(Math.random() * Math.floor(size))
  }

  setSelected(rnd)
}

const Button = ({anecdotes, selected, setSelected}) => (
  <button onClick={() => randomAnecdote(anecdotes, selected, setSelected)}>
    next anecdote
  </button>
)

const Anecdote = ({anecdotes, anecdote_i}) => {
  return (
    <div>
      {anecdotes[anecdote_i]}
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <Anecdote anecdotes={props.anecdotes} anecdote_i={selected}/>
      <Button anecdotes={props.anecdotes} selected={selected} setSelected={setSelected}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)