import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Phoneform from './components/Phoneform'
import Phonelist from './components/Phonelist'
import Phonefilter from './components/Phonefilter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', visible: true},
    { name: 'Ada Lovelace', number: '39-44-5323523', visible: true },
    { name: 'Dan Abramov', number: '12-43-234345', visible: true },
    { name: 'Mary Poppendieck', number: '39-23-6423122', visible: true }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    
    const newPerson = { 
      name: newName,
      number: newNumber,
      visible: true
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

  const handleNameFilterInputChange = (event) => {
    const newNameFilter = event.target.value
    
    if (newNameFilter === '') {
      setPersons(persons.map(person => { 
        const newPersonObj = { 
          ...person, 
          visible: person.visible = true 
        }
        return newPersonObj
      }))
    } else {
      setPersons(persons.map(person => {
        const newPersonObj = { 
          ...person, 
          visible: person.visible = person.name.toLocaleLowerCase().includes(newNameFilter) 
        }
        return newPersonObj
      }))
    }

    setNameFilter(newNameFilter)
  }

  return (
    <div>
      <Header />
      <Phonefilter 
        nameFilter={nameFilter}
        handleNameFilterChange={handleNameFilterInputChange}/>
      <Phoneform 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameInputChange}
        newNumber={newNumber} 
        handleNumberChange={handleNumberInputChange}
      />
      <Phonelist persons={persons} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))