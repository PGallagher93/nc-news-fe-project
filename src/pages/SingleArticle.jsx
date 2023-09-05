import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import fetchSingleArticle from "../api/fetchSingleArticle"
import SingleArticleContainer from "../Components/singleArticleContainer"

const SingleArticle = ({articles, isLoading, setIsLoading}) =>{
   
    const {article_id} = useParams()
    console.log(article_id, "<< id")
    const [singleArticle, setSingleArticle] = useState({})

    useEffect(()=>{
        setIsLoading(true)
        fetchSingleArticle(article_id).then((res) =>{
            console.log(res)
            setIsLoading(false)
           setSingleArticle(res.data.article)
        })
    },[])
    console.log(singleArticle, "<< single article")
    console.log(isLoading, "<< loading")
    if(isLoading) return (
        <p>Loading...</p>
    )
   else if (singleArticle.title) return (
        <main>
            <SingleArticleContainer singleArticle={singleArticle}/>
        </main>
    )

}

export default SingleArticle

