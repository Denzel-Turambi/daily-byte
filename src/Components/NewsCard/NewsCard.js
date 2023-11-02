import './NewsCard.css'
import { Link } from 'react-router-dom';

function NewsCard({ id, title, description, img }) {
  return (
    <Link to={`/${title}`}>
      <div className="news-card" id={id}>
        <h2 id={id}>{title}</h2>
        <p id={id}>{description}</p>
        <img id={id} className="dashboard-img" src={img} alt="news article image"/>
      </div>
    </Link>
  )
}

export default NewsCard;