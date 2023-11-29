import { DeleteIcon } from './Icons'

export function Persons ({ persons, handleDelete }) {
  return (
    <ul>
      {
        persons?.map(person => {
          const { id, name, number } = person
          return (
            <li 
              key={id}
              className='py-2'
            >
              <div className='flex gap-4 items-center'>
                <span>{name} {number}</span>
                <button 
                  className='border border-red-500 text-red-500 rounded-md p-1'
                  onClick={() => handleDelete(id)}
                >
                  <DeleteIcon />
                </button>
              </div>
              
            </li>
          )
        })
      }
    </ul>
  )
}