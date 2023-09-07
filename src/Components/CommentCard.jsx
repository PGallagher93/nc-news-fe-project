
import { deleteComment } from "../api"

const CommentCard = ({comment, user, setCommentDeleted}) =>{
   const handleCommentDeletion=(id)=>{
    
    deleteComment(id).then(()=>{
        
        setCommentDeleted(id)
    })

   }
    return (
        <li className="comment-card">
            <section className="comment-body">
                <p className="comment-author">{comment.author}</p>
                <p>{comment.body}</p>
                <p className="comment-date">Posted at: {comment.created_at.substring(0,10)}</p>
            </section>
            <p className="comment-votes">Votes: {comment.votes}</p>
            {comment.author === user &&
            <button onClick={() =>{handleCommentDeletion(comment.comment_id)}}>Delete</button>
            }

        </li>
    )
}

export default CommentCard
