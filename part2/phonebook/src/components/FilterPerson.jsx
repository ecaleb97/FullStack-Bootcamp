export function FilterPerson ({ filterValue, handleFilterChange }) {
  return (
    <div className="flex gap-2 items-center">
      <p>Filter shown with</p>
      <input 
        type="text" 
        value={filterValue}
        onChange={handleFilterChange}
        className='px-2 py-[1px] border border-gray-400 rounded-md'
        placeholder="Search..."
      />
    </div>
  )
}