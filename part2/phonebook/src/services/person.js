import axios from 'axios'

const baseURL = 'api/persons'

export function getAll() {
  return (
    axios.get(baseURL)
      .then(response => response.data)
  )
}

export function create(person) {
  return (
    axios.post(baseURL, person)
      .then(response => response.data)
  )
}

export function update(id, person) {
  return (
    axios.put(`${baseURL}/${id}`, person)
      .then(response => response.data)
  )
}

export function remove(id) {
  return (
    axios.delete(`${baseURL}/${id}`)
      .then(response => response.data)
  )
}