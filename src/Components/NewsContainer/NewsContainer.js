import './NewsContainer.css'
import NewsCard from '../NewsCard/NewsCard';

function NewsContainer({news}) {
  const allNews = news.map(newsCard => {
    console.log('1', news)
    return(
      <NewsCard 
        title={newsCard.title}
        description={newsCard.description}
        img={newsCard.urlToImage}
      />
    )
  })

  return (
   <div>
    {allNews}
   </div>
  )
}

export default NewsContainer;