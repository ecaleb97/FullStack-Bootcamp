import { useState } from 'react'
import { Title } from './components/Title'
import { Button } from './components/Button'
import { Anecdote } from './components/Anecdote'
import { anecdotes } from './mocks/data'

function App() {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleVote = () => {
    setPoints((prevState) => {
      const newState = [...prevState]
      newState[selected] += 1
      return newState
    })
  }

  const maxVotes = Math.max(...points)

  return (
    <div className='p-4'>
      <Title text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes={points[selected]} />
      <div className='flex gap-4 my-4'>
        <Button text="Vote" onClick={handleVote} />
        <Button 
          text="Next anecdote" 
          onClick={() => setSelected(getRandomInt(0, anecdotes.length - 1))} 
        />
      </div>
      <Title text="Anecdote with most votes" />
      <Anecdote text={anecdotes[points.indexOf(maxVotes)]} votes={maxVotes} />
    </div>
  )
}

export default App
