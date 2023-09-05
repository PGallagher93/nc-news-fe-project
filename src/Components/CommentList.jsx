import CommentCard from "./CommentCard"

const CommentList = ({articleComments}) =>{
 
   return( <ul className="comment-list">
        {
    
        articleComments.map((comment)=>{
            return (
                <CommentCard key={comment.comment_id} comment = {comment}/>
            )
        })}
    </ul>
   )
}

export default CommentList