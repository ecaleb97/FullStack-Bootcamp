export function Total ({ parts }) {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <p className="text-xl text-blue-400">
      Total of {total} exercises
    </p>
  )
}