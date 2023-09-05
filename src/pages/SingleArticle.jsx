import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import fetchSingleArticle from "../api/fetchSingleArticle"
import SingleArticleContainer from "../Components/singleArticleContainer"
import CommentsContainer from "../Components/CommentsContainer"

const SingleArticle = ({articles, isLoading, setIsLoading}) =>{
   
    const {article_id} = useParams()
 
    const [singleArticle, setSingleArticle] = useState({})
    

    useEffect(()=>{
        setIsLoading(true)
        fetchSingleArticle(article_id).then((res) =>{
            
            setIsLoading(false)
           setSingleArticle(res.data.article)
        })
    },[])
    
    
    if(isLoading) return (
        <p>Loading...</p>
    )
   else if (singleArticle.title) return (
        <main>
            <SingleArticleContainer singleArticle={singleArticle}/>
            <CommentsContainer article_id={article_id}/>
        </main>
    )

}

export default SingleArticle
