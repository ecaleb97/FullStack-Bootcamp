import { DeleteIcon } from './Icons'

export function Person ({ name, number, handleDelete }) {
  return (
    <li>
      <div className='flex gap-4 items-center'>
        <span className='capitalize'>{name} {number}</span>
        <button 
          className='border border-red-500 text-red-500 rounded-md p-1'
          onClick={handleDelete}
        >
          <DeleteIcon />
        </button>
      </div>
      
    </li>
  )
}