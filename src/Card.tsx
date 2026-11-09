import { Button } from './components/Button'
import { useState } from 'react'
import styles from "./Card.module.css"


function Card({ title, image }: { title: string; image: string }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={image} alt="Placeholder" />
      <br></br>
      <Button label="Like" onClick={() => setLikes(likes + 1)}  />
      <Button label="Share" onClick={() => alert("Share gedrückt")} />
      <br></br>
      <label>{likes}</label>
    </div>
  )
}

export default Card