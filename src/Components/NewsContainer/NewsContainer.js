import './NewsContainer.css'
import NewsCard from '../NewsCard/NewsCard';

function NewsContainer({news}) {
  const allNews = news.map(newsCard => {
    return(
      <NewsCard 
        id={newsCard.title}
        title={newsCard.title}
        description={newsCard.description}
        img={newsCard.urlToImage}
        key={newsCard.title}
      />
    )
  })

  return (
   <div className="news-container">
    {allNews}
   </div>
  )
}

export default NewsContainer;