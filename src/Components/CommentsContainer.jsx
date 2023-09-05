import {useState, useEffect} from 'react'
import CommentList from './CommentList'
import {fetchComments} from '../api'


const CommentsContainer = ({article_id}) =>{
    const [articleComments, setArticleComments]=useState([])
    useEffect(()=>{
        
        fetchComments(article_id).then((res) =>{
            setArticleComments(res.data.comments)
        })
    }, [])
    return (
        <div>
            <p>Insert Comment placeholder</p>
            <CommentList articleComments={articleComments}/>

        </div>
    )
}

export default CommentsContainer