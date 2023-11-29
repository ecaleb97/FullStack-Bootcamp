import { courses } from "./mocks/data"
import { Course } from "./components/Course"

function App() {
  
  return (
    <div className="p-4">
      <Course courses={courses} />
    </div>
  )
}

export default App
