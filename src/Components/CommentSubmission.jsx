import {useState} from 'react'
import { postComment } from '../api'

const CommentSubmission = ({user, setArticleComments, article_id, setCommentAdded}) =>{
    
    const [commentInput, setCommentInput] = useState("")
    const [isPosting, setIsPosting] = useState(false)
    const [commentPosted, setCommentPosted] = useState(false)
    const [isError, setIsError] = useState(false)
    const handleCommentSubmit = (e) =>{
        e.preventDefault()
        setCommentPosted(false)
        if(commentInput !== ""){
        setIsPosting(true)
        postComment(article_id, commentInput, user).then((res)=>{
            const newComment = res.data.comment[0]
            setIsPosting(false)
            setCommentPosted(true)
            setCommentAdded(commentInput)
            setArticleComments((curr) =>{
                return [...curr, newComment]
            })
        }).catch(()=>{
            setIsError(true)
            setIsPosting(false)
        })}
        setCommentInput("")

    }
    let commentSuccess

    if(commentPosted){
        commentSuccess = <p>Comment posted</p>
    }
    if(isError){
        commentSuccess = <p>Failed to post comment</p>
    }
    
    if (!isPosting) {return (
        <form className="comment-submit" onSubmit={handleCommentSubmit}>
            <textarea value = {commentInput} onChange ={(e) => {
                setCommentInput(e.target.value)
            }}></textarea>
            <button id="comment-submit-button">Comment</button>
            {commentSuccess}
        </form>
    )}
    else if (isPosting) {
        return (
            <p>Posting comment...</p>
        )
    }

}

export default CommentSubmission