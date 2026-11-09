import { Button } from './components/Button'
import { useState } from 'react'
import styles from "./Card.module.css"

type Props = {
  title: string;
  image: string;
}

function getRandomColor(): string {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 35 + Math.floor(Math.random() * 30); // 35–65%
  const lightness = 30 + Math.floor(Math.random() * 25);  // 30–55%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function Card({ title, image }: Props) {
  const [likes, setLikes] = useState(0);
  const [bgColor] = useState<string>(getRandomColor);

  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <img src={image} alt="Placeholder" />
      <br />
      <Button label="Like" onClick={() => setLikes(likes + 1)} />
      <Button label="Share" onClick={() => alert("Share gedrückt")} />
      <br />
      <label>{likes}</label>
    </div>
  );
}

export default Card