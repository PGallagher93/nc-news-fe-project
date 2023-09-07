import TopicBar from "../Components/TopicBar"
import ArticleContainer from "../Components/ArticleContainer.jsx"
import {useEffect} from 'react'


const AllArticles = ({articles, articleQuery, setArticleQuery}) => {
  
    useEffect(()=>{
      setArticleQuery({sort:null, topic:null, order:null})
    }, [])
    
    
    return(
        <main>
            <TopicBar />
            <ArticleContainer articles={articles} setArticleQuery={setArticleQuery}/>
        </main>
    )
}

export default AllArticles