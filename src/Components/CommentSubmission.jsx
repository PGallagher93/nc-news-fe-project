import {useState} from 'react'
import { postComment } from '../api'

const CommentSubmission = ({user, setArticleComments, article_id, setCommentAdded, errorMessage, setErrorMessage}) =>{
    
    const [commentInput, setCommentInput] = useState("")
    const [isPosting, setIsPosting] = useState(false)
    const [commentPosted, setCommentPosted] = useState(false)
    const [isError, setIsError] = useState(false)
    const [commentErrorMsg, setCommentErrorMsg]= useState({})
    
    
    
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
        }).catch((err)=>{
            
          if(err.code==="ERR_NETWORK"){
            setIsError(true)
            setIsPosting(false)
          }else 
           setCommentErrorMsg(err.response.data)
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
    if(commentErrorMsg.msg){
        commentSuccess= <p>Failed to post comment: No current user</p>
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