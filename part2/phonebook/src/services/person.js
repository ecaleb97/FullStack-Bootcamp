import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

export function getAll() {
  return (
    axios.get(baseUrl)
      .then(response => response.data)
  )
}

export function create(person) {
  return (
    axios.post(baseUrl, person)
      .then(response => response.data)
  )
}

export function update(id, person) {
  return (
    axios.put(`${baseUrl}/${id}`, person)
      .then(response => response.data)
  )
}

export function remove(id) {
  return (
    axios.delete(`${baseUrl}/${id}`)
      .then(response => response.data)
  )
}