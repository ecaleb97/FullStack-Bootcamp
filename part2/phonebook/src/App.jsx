import { useEffect, useState } from 'react'
import { Persons } from './components/Persons'
import { Title } from './components/Title'
import { PersonForm } from './components/PersonForm'
import { FilterPerson } from './components/FilterPerson'
import { Notification } from './components/Notification'
import { 
  getAll as getAllPersons, 
  create as createPerson, 
  update as updatePerson, 
  remove as removePerson
} from './services/person'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  useEffect(() => {
    getAllPersons()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (newName.length === 0 || newNumber === '') return
    if (persons.some(person => person.name.toLowerCase() === newPerson.name.toLowerCase())) {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (result) {
        const person = persons.find(person => {
          return person.name.toLowerCase() === newPerson.name.toLowerCase()
        })
        updatePerson(person.id, newPerson)
          .then(returnedPerson => {
            setPersons(prevPersons => {
              return prevPersons.map(person => {
                return person.id === returnedPerson.id ? returnedPerson : person
              })
            })
            setNewName('')
            setNewNumber('')
          })
          .catch(() => {
            setMessage(`${person.name} has already been deleted from the server`)
            setMessageType('red')
            setTimeout(() => {
              setMessage(null)
            }, 3000)
            setPersons(prevPersons => {
              return prevPersons.filter(person => person.id !== person.id)
            })
          })
      }
    } else {
      createPerson(newPerson)
        .then(returnedPerson => {
          setPersons(prevPersons => [...prevPersons, returnedPerson])
          setNewName('')
          setNewNumber('')
          setMessage(`Added ${returnedPerson.name}`)
          setMessageType('green')
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        })
        .catch(error => {
          /* console.log(error.message) */
          setMessage(`An unexpected error has ocurred, ${error.message}`)
          setMessageType('red')
          setTimeout(() => {
            setMessage(null)
          }, 3000)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id) => {
    if (!window.confirm(`Delete ${persons.find(person => person.id === id).name}?`)) return
    removePerson(id)
      .then(() => {
        setPersons(prevPersons => {
          return prevPersons.filter(person => person.id !== id)
        })
        setMessage(`${persons.find(person => person.id === id).name} has been deleted`)
        setMessageType('red')
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      })
      .catch(() => {
        setMessage(`${persons.find(person => person.id === id).name} has already been deleted from the server`)
        setMessageType('red')
        setTimeout(() => {
          setMessage(null)
        }, 3000)
        setPersons(prevPersons => {
          return prevPersons.filter(person => person.id !== id)
        })
      })
  }

  const filteredPersons = persons.filter(person => {
    return person.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className='p-4 flex flex-col gap-4'>
      <header>
        <h1 className='text-4xl text-blue-600'>Phonebook App</h1>
      </header>
      <Notification message={message} type={messageType} />
      <Title title="Search a contact" />
      <FilterPerson 
        filterValue={search} 
        handleFilterChange={handleFilterChange} 
      />
      <Title title="Add a new contact" />
      <PersonForm
        nameValue={newName}
        numberValue={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={addPerson}
      />
      <Title title="Numbers" />
      <Persons persons={filteredPersons} handleDelete={deletePerson} />
    </div>
  )
}

export default App
