import ArticleCard from "./ArticleCard"
import SortOptions from "./SortOptions"
import {useParams} from "react-router-dom"
import Box from '@mui/system/Box'
import { Typography } from "@mui/material"

const ArticleContainer = ({articles, setArticleQuery}) =>{
   const {topic} = useParams()
   console.log(topic)
    return (
        <Box sx= {{display:"flex",
        flexDirection:'column',
        alignItems:'center'}}>
            <Typography variant="h3">{topic}</Typography>
            <SortOptions setArticleQuery ={setArticleQuery} />
            <ul className="article-list">
                {articles.map((article)=>{
                    
                return( 
                <ArticleCard key = {article.article_id}article={article}/>
                )           
                })}
            </ul>
        </Box>
    )
}

export default ArticleContainer