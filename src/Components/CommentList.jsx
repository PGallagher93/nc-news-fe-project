import CommentCard from "./CommentCard"

const CommentList = ({articleComments, user, setCommentDeleted}) =>{
    
   
  
    const sortedComments = articleComments.sort((a, b) => a.created_at - b.created_at)
    
       
   return( <ul className="comment-list">
        {
    
        sortedComments.map((comment)=>{
            return (
                <CommentCard key={comment.comment_id} setCommentDeleted ={setCommentDeleted} comment = {comment} user={user}/>
            )
        })}
    </ul>
   )
}

export default CommentList