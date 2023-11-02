import './NewsCard.css'

function NewsCard({title, description, img}) {
  return (
    <div className="news-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img className="dashboard-img" src={img} alt="news article image"/>
    </div>
  )
}

export default NewsCard;