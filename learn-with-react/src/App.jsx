import { useState } from 'react'
import './App.css'
import Positioning from './Positioning'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Positioning/>
    </>
  )
}

export default App
