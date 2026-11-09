import { useState } from 'react'

import './App.css'
import Card from './Card'
import styles from "./App.module.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="h1">Vite + React</h1>
      <p>{count}</p>
      <input type="button" value="Increment" onClick={() => setCount(count + 1)} />
      <div className={styles.cardcontainer}>
        <Card title="My Card" image="https://via.placeholder.com/150" />
        <Card title="My Card" image="https://via.placeholder.com/150" />
        <Card title="My Card" image="https://via.placeholder.com/150" />
      </div>
    </>
  )
}



export default App
