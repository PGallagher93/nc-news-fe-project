import CommentCard from "./CommentCard"

const CommentList = ({articleComments, username, setCommentDeleted}) =>{
    
   
  
    const sortedComments = articleComments.sort((a, b) => a.created_at - b.created_at)
    
       
   return( <div>
        {
    
        sortedComments.map((comment)=>{
            return (
                <CommentCard key={comment.comment_id} setCommentDeleted ={setCommentDeleted} comment = {comment} username={username}/>
            )
        })}
    </div>
   )
}

export default CommentList