import logo from '../../logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getNews } from '../../ApiCalls';
import sampleData from '../sampleData';
import Nav from '../Nav/Nav';
import NewsContainer from '../NewsContainer/NewsContainer'
function App() {
  const [news, setNews] = useState([]);

  // useEffect(() => {
  //   getNews()
  //   .then(data => setNews(data.articles))
  // },[])
  
  // Sample Data:
  useEffect(() => {
    setNews(sampleData)
  },[])

  console.log(news)

  return (
    <div>
      <Nav />
      <NewsContainer news={news}/>
    </div>
  );
}

export default App;
