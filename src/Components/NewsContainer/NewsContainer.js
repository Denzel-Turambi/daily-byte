import './NewsContainer.css'
import NewsCard from '../NewsCard/NewsCard';

function NewsContainer({ news, search, filter }) {
  let newsToDisplay;

  if (search && filter.length === 0) {
    newsToDisplay = (
      <div className="no-results-message">
        <p>No search results found.</p>
      </div>
    );
  } else {
    newsToDisplay = search
      ? filter.map((filteredArticle) => (
          <NewsCard
            id={filteredArticle.title}
            title={filteredArticle.title}
            description={filteredArticle.description}
            img={filteredArticle.urlToImage}
            key={filteredArticle.title}
          />
        ))
      : news.map((article) => (
          <NewsCard
            id={article.title}
            title={article.title}
            description={article.description}
            img={article.urlToImage}
            key={article.title}
          />
        ));
  }

  return (
    <div className="news-container">
      {newsToDisplay}
    </div>
  );
}

export default NewsContainer;