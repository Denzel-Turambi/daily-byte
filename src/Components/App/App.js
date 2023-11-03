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
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getNews()
    .then(data => setNews(data.articles))
  },[])
  
  // Sample Data:
  // useEffect(() => {
  //   setNews(sampleData)
  // },[])

  useEffect(() => {
    const filteredNews = news.filter(article => article.title.toLowerCase().includes(search))
    setFilter(filteredNews)
  }, [news, search])

  function searchFilter(event) {
    setSearchValue(event.target.value);
    const searchNews = event.target.value.toLowerCase();
    setSearch(searchNews);
  }

  console.log(news)

  return (
    <div className="app">
      <header>
        <Nav search={search} searchFilter={searchFilter} />
      </header>
      <Routes>
        <Route path='/' element={<NewsContainer news={news} search={search} filter={filter}/>} />
        <Route path='/:id' element={<FocusView news={news}/>} />
      </Routes>
    </div>
  );
}

export default App;
