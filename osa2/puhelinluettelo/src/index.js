import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Phoneform from './components/Phoneform'
import Phonelist from './components/Phonelist'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    
    const newPerson = { 
      name: newName,
      number: newNumber
    }
    
    const duplicatePersons = persons.filter(person => person.name === newPerson.name)
    if (duplicatePersons.length > 0) {
      window.alert(`${newPerson.name} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(newPerson))    
    setNewName('')
    setNewNumber('')
  }

  const handleNameInputChange = (event) => (
    setNewName(event.target.value)
  )

  const handleNumberInputChange = (event) => (
    setNewNumber(event.target.value)
  )

  return (
    <div>
      <Header />
      <Phoneform 
      addName={addName} 
      newName={newName} 
      handleNameChange={handleNameInputChange}
      newNumber={newNumber} 
      handleNumberChange={handleNumberInputChange}/>
      <Phonelist persons={persons} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))