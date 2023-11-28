import { useState } from 'react'
import { Title } from './components/Title'
import { Statistics } from './components/Statistics'
import { Button } from './components/Button'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(prevState => prevState + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(prevState => prevState + 1)
  }

  const handleClickBad = () => {
    setBad(prevState => prevState + 1)
  }

  return (
    <div className='p-4'>
      <Title title='Give Feedback' />
      <div className='flex gap-4 my-4'>
        <Button text='Good' handleClick={handleClickGood} />
        <Button text='Neutral' handleClick={handleClickNeutral} />
        <Button text='Bad' handleClick={handleClickBad} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
