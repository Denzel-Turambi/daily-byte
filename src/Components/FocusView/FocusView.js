import { Link, useParams } from "react-router-dom";

function FocusView({ news }) {

  const id = useParams();

  const singleArticle = news.find(article => id.id === article.title)
  console.log(singleArticle)

  return (
    <div>
      <h1>{singleArticle.title}</h1>
      <h3>Written by {singleArticle.author}</h3>
      <p>Published on {singleArticle.publishedAt}</p>
      <p>{singleArticle.description}</p>
      <img className="dashboard-img" src={singleArticle.urlToImage} alt="news article image" />
      <p>{singleArticle.content}</p>
      <p>To read the full article, click <a href={singleArticle.url}>here</a></p>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default FocusView;