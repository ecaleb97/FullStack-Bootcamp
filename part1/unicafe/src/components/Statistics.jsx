import { StatisticLine } from "./StatisticLine"

export function Statistics ({ good, neutral, bad }) {
  const isClicked = good + neutral + bad > 0

  const all = good + neutral + bad
  const average = Math.round(((good - bad) / (good + bad + neutral) + Number.EPSILON) * 100) / 100
  const positive = Math.round(((good / (good + bad + neutral) * 100) + Number.EPSILON) * 100) / 100
  return (
    <div>
      {
        isClicked
          ? (
            <div>
              <h2 className="text-2xl">Statistics</h2>
              <table>
                <tbody>
                  <StatisticLine text='Good' value={good} />
                  <StatisticLine text='Neutral' value={neutral} />
                  <StatisticLine text='Bad' value={bad} />
                  <StatisticLine text='All' value={all} />
                  <StatisticLine text='Average' value={average} />
                  <StatisticLine text='Positive' value={`${positive} %`} />
                </tbody>
              </table>
            </div>
          )
          : <h2>No feedback given</h2>
      }
    </div>
  )
}