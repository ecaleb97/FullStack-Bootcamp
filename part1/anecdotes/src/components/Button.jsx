export function Button ({ text, onClick }) {
  return (
    <button  
      className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold 
      py-[2px] px-4 rounded`} 
      onClick={onClick}
    >
      {text}
    </button>
  )
}