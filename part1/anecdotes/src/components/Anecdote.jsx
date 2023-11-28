export function Anecdote ({ text, votes }) {
  return (
    <article className="flex flex-col gap-2 mt-2">
      <cite>{text}</cite>
      <p>Has {votes} votes</p>
    </article>
  )
}