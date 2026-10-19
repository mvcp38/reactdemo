import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="h1">Vite + React</h1>
    <p>{count}</p>
    <input type="button" value="Increment" onClick={() => setCount(count + 1)} />

    </>
  )
}



export default App
