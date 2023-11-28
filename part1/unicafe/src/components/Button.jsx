export function Button ({ text, handleClick }) {
  const buttonStyle = text === 'Good' ? 'bg-green-200' : text === 'Neutral' ? 'bg-yellow-200' : 'bg-red-200'

  return (
    <button className={`${buttonStyle} border border-black rounded-md px-2 py-[2px]`} onClick={handleClick}>{text}</button>
  )
}
