export function PersonForm ({
  nameValue,
  numberValue,
  handleNameChange,
  handleNumberChange,
  handleSubmit
}) {
  
  const inputStyle = 'px-2 py-[1px] border border-gray-400 rounded-md sm:w-[300px]'

  return (
    <form   
      className='flex flex-col gap-2'
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        placeholder='name'
        value={nameValue}
        onChange={handleNameChange} 
        className={inputStyle}
        required
      />
      <input type="text" 
        placeholder='number'
        value={numberValue}
        onChange={handleNumberChange}
        className={inputStyle}
        required
      />
      <button
        type='submit'
        className="inline-block border border-green-500 text-green-500 rounded-md px-2 py-[1px] sm:w-[150px]"
      >
        Add Contact
      </button>
    </form>
  )
}