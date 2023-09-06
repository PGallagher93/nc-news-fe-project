import {useState, useEffect} from 'react'
import CommentList from './CommentList'
import {fetchComments} from '../api'
import CommentSubmission from './CommentSubmission'

const CommentsContainer = ({article_id, user}) =>{
    const [commentAdded, setCommentAdded] = useState("")
    const [articleComments, setArticleComments]=useState([])
    useEffect(()=>{
        
        fetchComments(article_id).then((res) =>{
            setArticleComments(res.data.comments)
        })
    }, [commentAdded])

    
    return (
        <div>
            <CommentSubmission  article_id={article_id} user={user} setArticleComments={setArticleComments} setCommentAdded={setCommentAdded}/>
            <CommentList articleComments={articleComments}/>

        </div>
    )
}

export default CommentsContainer