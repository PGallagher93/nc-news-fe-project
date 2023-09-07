
import ArticleContainer from "../Components/ArticleContainer";
import {useParams, Navigate} from "react-router-dom"
import {useEffect} from 'react'


const TopicArticles = ({articles, setArticleQuery, errorMessage, }) => {
    const {topic} = useParams()
    
    useEffect(()=>{
        
        setArticleQuery((currVal)=>{
            return {...currVal, topic:topic}
        })

    }, [topic])
    
   
    if(Object.keys(errorMessage).length !== 0){
        return (<Navigate to="/404" />)
    } 
    
   else return (
        <main>
            
            <ArticleContainer articles={articles} setArticleQuery={setArticleQuery}/>
        </main>
    )
}

export default TopicArticles