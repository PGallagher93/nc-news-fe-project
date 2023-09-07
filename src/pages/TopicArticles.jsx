import TopicBar from "../Components/TopicBar";
import ArticleContainer from "../Components/ArticleContainer";
import {useParams} from "react-router-dom"
import {useEffect} from 'react'

const TopicArticles = ({articles, setArticleQuery, errorMessage, isLoading}) => {
    const {topic} = useParams()
    
    useEffect(()=>{
        console.log("here")
        setArticleQuery((currVal)=>{
            return {...currVal, topic:topic}
        })

    }, [topic])
    console.log(articles, "artis")
    // if(isLoading === true){
    //     return <p>Loading...</p>
    // }
    if(Object.keys(errorMessage).length !== 0){
        return <p>Not Found</p>
    } 
    
    return (
        <main>
            <TopicBar/>
            <ArticleContainer articles={articles} setArticleQuery={setArticleQuery}/>
        </main>
    )
}

export default TopicArticles