import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Phoneform from './components/Phoneform'
import Phonelist from './components/Phonelist'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    
    const newPerson = { name: newName }
    setPersons(persons.concat(newPerson))
    
    setNewName('')
  }

  const handleNameInputChange = (event) => (
    setNewName(event.target.value)
  )

  return (
    <div>
      <Header />
      <Phoneform addName={addName} newName={newName} handleNameChange={handleNameInputChange}/>
      <Phonelist persons={persons} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))