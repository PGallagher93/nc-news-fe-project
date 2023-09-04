import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import AllArticles from './pages/AllArticles'
import fetchArticles from './api/fetchArticles'

function App() {
  const [articles, setArticles] = useState([])
  useEffect(()=>{
    fetchArticles().then((res)=>{
      setArticles(res.data.articles)
    })
  }, [])

  return (
    <main>
     <Header />
     <Routes>
      <Route path = "/articles" element ={<AllArticles articles={articles} />}/>
     </Routes>
    </main>
  )
}

export default App
