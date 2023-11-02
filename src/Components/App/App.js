import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getNews } from '../../ApiCalls';
import sampleData from '../sampleData';
import Nav from '../Nav/Nav';
import NewsContainer from '../NewsContainer/NewsContainer';
import FocusView from '../FocusView/FocusView';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
    .then(data => setNews(data.articles))
  },[])
  
  // Sample Data:
  // useEffect(() => {
  //   setNews(sampleData)
  // },[])

  console.log(news)

  return (
    <div>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<NewsContainer news={news}/>} />
        <Route path='/:id' element={<FocusView news={news}/>} />
      </Routes>
    </div>
  );
}

export default App;
