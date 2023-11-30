export function Notification ({ message, type }) {
  if (message === null) return null

  let messageStyle

  if (type === 'green') {
    messageStyle = "bg-green-200 p-2 border rounded-md border-green-500 text-green-500"
  } else if (type === 'red') {
    messageStyle = "bg-red-200 p-2 border rounded-md border-red-500 text-red-500"
  }
  
  return (
    <div className={messageStyle}>
      {message}
    </div>
  )
}