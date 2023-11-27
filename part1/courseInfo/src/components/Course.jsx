export function Course ({ parts }) {
  return (
    <div>
      {
        parts.map(part => {
          const { name, exercises } = part
          return (
            <p key={name}>
              {name} {exercises}
            </p>
          )
        })
      }
    </div>
  )
}