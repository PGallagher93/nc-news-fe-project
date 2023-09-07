import {useParams, Navigate} from "react-router-dom"
import {useState, useEffect} from 'react'
import {fetchSingleArticle} from '../api'
import SingleArticleContainer from "../Components/singleArticleContainer"
import CommentsContainer from "../Components/CommentsContainer"

const SingleArticle = ({errorMessage, setErrorMessage, isLoading, setIsLoading, user}) =>{
   
    const {article_id} = useParams()
 
    const [singleArticle, setSingleArticle] = useState({})
    

    useEffect(()=>{
        setIsLoading(true)
        fetchSingleArticle(article_id).then((res) =>{
            setErrorMessage({})
            setIsLoading(false)
           setSingleArticle(res.data.article)
        }).catch((err)=>{
            
            setErrorMessage(err.response.data)
        })
    },[])
    if(errorMessage.msg){
        
        if(errorMessage.msg === "not found"){
           
            return (<Navigate to="/404" />)
        }
        if(errorMessage.msg === "bad request"){
            return (<Navigate to="/400"/>)
        }
    }
    
    if(isLoading) return (
        <p>Loading...</p>
    )
   else if (singleArticle.title) return (
        <main>
            <SingleArticleContainer singleArticle={singleArticle} article_id ={article_id}/>
            <CommentsContainer article_id={article_id} user={user} />
        </main>
    )

}

export default SingleArticle

