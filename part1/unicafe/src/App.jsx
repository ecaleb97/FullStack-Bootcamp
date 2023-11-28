import { useState } from 'react'
import { Title } from './components/Title'
import { Statistics } from './components/Statistics'
import { Button } from './components/Button'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (type) => {
    if (type === 1) {
      setGood(prevState => prevState + 1)
    } else if (type === 0) {
      setNeutral(prevState => prevState + 1)
    } else {
      setBad(prevState => prevState + 1)
    }
  }

  return (
    <div className='p-4'>
      <Title title='Give Feedback' />
      <div className='flex gap-4 my-4'>
        <Button text='Good' handleClick={() => handleClick(1)} />
        <Button text='Neutral' handleClick={() => handleClick(0)} />
        <Button text='Bad' handleClick={() => handleClick(-1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
