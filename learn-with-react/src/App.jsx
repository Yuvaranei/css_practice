import { useState } from 'react'
import './App.css'
// import Positioning from './Positioning'
import TransformOrigin from './transform-origin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TransformOrigin/>
    </>
  )
}

export default App
