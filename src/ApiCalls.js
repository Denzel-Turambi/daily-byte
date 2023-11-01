// export function getNews() {
//   return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
//   .then(res => res.json())
// }

export function getNews() {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=3e13ead00bc940b8974f3f18b022c03e`)
  .then(res => res.json())
}