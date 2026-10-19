function Card( { title, image }: { title: string; image: string } ) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt="Placeholder" />
    </div>
  )
}

export default Card