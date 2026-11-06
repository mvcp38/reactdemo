import { Button } from './components/Button'
import { useState } from 'react'

function Card({ title, image }: { title: string; image: string }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt="Placeholder" />
      <br></br>
      <Button label="Like" onClick={() => alert('Button gedrückt!')} />
      <Button label="Share" onClick={() => console.log("hello")} />
      <br></br>
      <label>{likes}</label>
    </div>
  )
}

export default Card