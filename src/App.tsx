import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="h1">Vite + React</h1>
      <p>{count}</p>
      <input type="button" value="Increment" onClick={() => setCount(count + 1)} />
      <div className="card-container">
        <Card title="My Card" image="https://via.placeholder.com/150" />
        <Card title="My Card" image="https://via.placeholder.com/150" />
        <Card title="My Card" image="https://via.placeholder.com/150" />
      </div>
    </>
  )
}



export default App
