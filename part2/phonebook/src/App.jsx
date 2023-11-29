import { useState } from 'react'
import { Persons } from './components/Persons'
import { Title } from './components/Title'
import { PersonForm } from './components/PersonForm'
import { FilterPerson } from './components/FilterPerson'
import { initialPersons } from './mocks/data'

function App() {
  const [persons, setPersons] = useState(initialPersons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }

    if (newName.length === 0 || newNumber === '') {
      return (
        <p>Please fill the form</p>
      )
    }
    if (persons.some(person => person.name.toLowerCase() === newPerson.name.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id) => {
    const newPersons = persons.filter(person => person.id !== id)
    setPersons(newPersons)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='p-4 flex flex-col gap-4'>
      <Title title="Phonebook" />
      <FilterPerson 
        filterValue={search} 
        handleFilterChange={handleFilterChange} 
      />
      <PersonForm
        nameValue={newName}
        numberValue={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App
