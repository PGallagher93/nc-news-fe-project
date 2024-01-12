
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { deleteComment } from "../api"
import { timeAgo } from "../utils"

const CommentCard = ({comment, user, setCommentDeleted}) =>{
   const handleCommentDeletion=(id)=>{
    
    deleteComment(id).then(()=>{
        
        setCommentDeleted(id)
    })
}
    return (
        <Card sx={{mx: {xs:'0', md: '5rem'},
                   my:1,
                   boxShadow:3}}>
            <CardContent sx={{display:'flex', justifyContent:'space-between'}}>
                <Typography>{comment.author}</Typography>
                <Typography color="text.secondary">{timeAgo(comment.created_at.substring(0,10))}</Typography>
            </CardContent>
            <CardContent >
                <Typography sx={{px:1}}>{comment.body}</Typography>
            </CardContent>
            <CardActions>
                
            </CardActions>
        </Card>
        // <li className="comment-card">
        //     <section className="comment-body">
        //         <p className="comment-author">{comment.author}</p>
        //         <p>{comment.body}</p>
        //         <p className="comment-date">Posted at: {comment.created_at.substring(0,10)}</p>
        //     </section>
        //     <p className="comment-votes">Votes: {comment.votes}</p>
        //     {comment.author === user &&
        //     <button onClick={() =>{handleCommentDeletion(comment.comment_id)}}>Delete</button>
        //     }

        // </li>
    )
}

export default CommentCard
