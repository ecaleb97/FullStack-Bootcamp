export function Button ({ text }) {
  return (
    <button 
      type="submit"
      className="border border-black rounded-md px-2 py-[1px]"
    >
      {text}
    </button>
  )
}