import {useState, useEffect} from 'react'
import CommentList from './CommentList'
import {fetchComments} from '../api'
import CommentSubmission from './CommentSubmission'


const CommentsContainer = ({article_id, user, errorMessage, setErrorMessage}) =>{
    const [commentAdded, setCommentAdded] = useState("")
    const [articleComments, setArticleComments]=useState([])
    const [commentDeleted, setCommentDeleted] = useState("")
    useEffect(()=>{
        
        fetchComments(article_id).then((res) =>{
            setArticleComments(res.data.comments)
        })
    }, [commentAdded, commentDeleted])

    
    return (
        <div>
            <CommentSubmission  article_id={article_id} user={user} setArticleComments={setArticleComments} setCommentAdded={setCommentAdded} />
            <CommentList setCommentDeleted={setCommentDeleted} articleComments={articleComments} user={user}/>

        </div>
    )
}

export default CommentsContainer