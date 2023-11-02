import './NewsContainer.css'
import NewsCard from '../NewsCard/NewsCard';

function NewsContainer({ news, search, filter }) {
  let allNews = [];
  let filteredNews = [];

  filteredNews = search ? filter.map(filteredArticle => {
    return(
      <NewsCard 
        id={filteredArticle.title}
        title={filteredArticle.title}
        description={filteredArticle.description}
        img={filteredArticle.urlToImage}
        key={filteredArticle.title}
      />
    )
  }) : (
    allNews = news.map(article => {
      return(
        <NewsCard 
          id={article.title}
          title={article.title}
          description={article.description}
          img={article.urlToImage}
          key={article.title}
        />
      )
    })
  )

  return (
   <div className="news-container">
    {search ? filteredNews : allNews}
   </div>
  )
}

export default NewsContainer;