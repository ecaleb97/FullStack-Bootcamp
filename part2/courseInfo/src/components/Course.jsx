import { Header } from './Header'
import { Content } from './Content'
import { Total } from './Total'

export function Course ({ courses }) {
  return (
    <>
      {courses?.map(course => {
        const { id, name, parts } = course
        return (
          <div 
            key={id}
            className='p-4'
          >
            <Header course={name} />
            <Content parts={parts} />
            <Total parts={parts} />
          </div>
        )
      })}
    </>
  )
}