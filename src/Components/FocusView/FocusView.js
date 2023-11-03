import './FocusView.css';
import { Link, useParams } from "react-router-dom";

function FocusView({ news }) {

  const id = useParams();

  const singleArticle = news.find(article => id.id === article.title)

  return (
    <div className="focus-container">
      <Link to="/" className="button-container">
        <p className="back-button">Go Back</p>
      </Link>
      <div className="article-header">
        {!singleArticle.title ? <h1>No Title</h1> : <h1>{singleArticle.title}</h1>}
        {!singleArticle.author ? <h3>Anonymous Writer</h3> : <h3>Written by {singleArticle.author}</h3>}
        <p>Published on {singleArticle.publishedAt}</p>
      </div>
      <p>{singleArticle.description}</p>
      <img className="focus-img" src={singleArticle.urlToImage} alt="news article image" />
      <p>{singleArticle.content}</p>
      <p>To read the full article, click <a href={singleArticle.url}>here</a></p>
    </div>
  )
}

export default FocusView;