import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import personService from './services/persons'
import Header from './components/Header'
import Phoneform from './components/Phoneform'
import Phonelist from './components/Phonelist'
import Phonefilter from './components/Phonefilter'
import Errormessage from './components/Errormessage'
import Successmessage from './components/Successmessage'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  const [ successMsg, setSuccessMsg ] = useState(null)
  const [ errorMsg, setErrorMsg ] = useState(null)

  const addName = (event) => {
    event.preventDefault()
    
    const newPerson = { 
      name: newName,
      number: newNumber
    }
    
    const duplicatePersons = persons.filter(person => person.name === newPerson.name)
    if (duplicatePersons.length > 0) {
      setErrorMsg(`${newPerson.name} is already added to phonebook`)
      setTimeout(() => {
        setErrorMsg(null)
      }, 5000)
      return
    }

    personService
      .create(newPerson)
      .then(newPerson => { 
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')

        setSuccessMsg(`Added ${newPerson.name}`)
        setTimeout(() => {
          setSuccessMsg(null)
        }, 2000)
      })
    
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
          visible: person.visible = person.name.toLocaleLowerCase()
            .includes(newNameFilter.toLocaleLowerCase()) 
        }
        return newPersonObj
      }))
    }

    setNameFilter(newNameFilter)
  }

  const handleDeleteBuilder = (person) => {

    const handleDelete = (event) => {
      event.preventDefault()
      
      const confirmRes = window.confirm(`Delete ${person.name} ?`)
      if (confirmRes) {
        personService
          .remove(person.id)
          .then(() => {
            setPersons(persons.filter(p => p.id !== person.id ))

            setSuccessMsg(`Deleted ${person.name}`)
            setTimeout(() => {
              setSuccessMsg(null)
            }, 2000)
          })
          .catch(error => {
            setErrorMsg(`Error deleting person: ${person.name}`)
            setTimeout(() => {
              setErrorMsg(null)
            }, 5000)
          })
      }
    }
    return handleDelete

  }
  
  const loadPersonsHook = () => {
    personService
      .getAll()
      .then(loadedPersons => {
        setPersons(loadedPersons)
      })
  }
  useEffect(loadPersonsHook, [])

  return (
    <div>
      <Header />
      <Successmessage message={successMsg}/>
      <Errormessage message={errorMsg}/>
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
      <Phonelist persons={persons} handleDeleteBuilder={handleDeleteBuilder} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))