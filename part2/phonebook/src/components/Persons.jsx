import { Person } from "./Person"

export function Persons ({ persons, handleDelete }) {
  return (
    <ul className="list-disc pl-4 flex flex-col gap-4">
      {
        persons?.map(person => {
          const { id, name, number } = person
          return (
            <Person
              key={id}
              name={name}
              number={number}
              handleDelete={() => handleDelete(id)}
            />
          )
        })
      }
    </ul>
  )
}