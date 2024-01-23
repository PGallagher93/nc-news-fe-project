import { Typography } from "@mui/material"
import ArticleContainer from "../Components/ArticleContainer.jsx"
import {useEffect} from 'react'


const AllArticles = ({isLoading, articles, articleQuery, setArticleQuery}) => {
  
    useEffect(()=>{
      setArticleQuery({sort:null, topic:null, order:null})
    }, [])
    
    if(isLoading){
        return <p>Loading...</p>
    }
    return(
        <main>
            <Typography
            variant="h3"
            align="center">Articles</Typography>
            <ArticleContainer articles={articles} setArticleQuery={setArticleQuery}/>
        </main>
    )
}

export default AllArticles