import {useState} from 'react'
import { postComment } from '../api'

const CommentSubmission = ({user, setArticleComments, article_id, setCommentAdded}) =>{
    
    const [commentInput, setCommentInput] = useState("")
    const [isPosting, setIsPosting] = useState(false)
    const [commentPosted, setCommentPosted] = useState(false)
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
        })}
        setCommentInput("")

    }
    let commentSuccess

    if(commentPosted){
        commentSuccess = <p>Comment posted</p>
    }
    
    if (!isPosting) {return (
        <form className="comment-submit" onSubmit={handleCommentSubmit}>
            <input value = {commentInput} onChange ={(e) => {
                setCommentInput(e.target.value)
            }}></input>
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