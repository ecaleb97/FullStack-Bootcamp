export function Input ({ value, onChange, placeholder }) {
  return (
    <input 
      className='px-2 py-[1px] border border-gray-400 rounded-md'
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}