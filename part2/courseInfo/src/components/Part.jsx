export function Part ({ name, exercises }) {
  return (
    <li className="py-2"> 
      {name} {exercises}
    </li>
  )
}