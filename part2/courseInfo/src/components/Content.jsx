import { Part } from "./Part"

export function Content ({ parts }) {
  return (
    <ul className="list-disc p-4">  
      {parts?.map(part => {
        const { id, name, exercises } = part
        return (
          <Part 
            key={id} 
            name={name} 
            exercises={exercises} 
          />
        )
      })}
    </ul>
  )
}