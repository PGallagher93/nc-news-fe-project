import CommentCard from "./CommentCard"

const CommentList = ({articleComments}) =>{
    
   

    const sortedComments = articleComments.sort((a, b) => a.created_at - b.created_at)
    
 
   return( <ul className="comment-list">
        {
    
        sortedComments.map((comment)=>{
            return (
                <CommentCard key={comment.comment_id} comment = {comment}/>
            )
        })}
    </ul>
   )
}

export default CommentList