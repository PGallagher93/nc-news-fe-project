import {useState} from 'react'
import { postComment } from '../api'
import { Box, Button, Snackbar, TextField } from '@mui/material'

const CommentSubmission = ({user, setArticleComments, article_id, setCommentAdded, errorMessage, setErrorMessage}) =>{
    
    const [commentInput, setCommentInput] = useState("")
    const [isPosting, setIsPosting] = useState(false)
    const [commentPosted, setCommentPosted] = useState(false)
    const [isError, setIsError] = useState(false)
    const [commentErrorMsg, setCommentErrorMsg]= useState({})
    const [open, setOpen] = useState(false)
    
    const handleClose = () => {
        setOpen(false)
        setIsError(false)
    }
    
    const handleCommentSubmit = (e) =>{
        e.preventDefault()
        setOpen(true)
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
            setCommentErrorMsg("No connection, failed to post")
          }else 
           setCommentErrorMsg("Failed to post, please ensure you're logged in")
            setIsPosting(false)
            setIsError(true)
        })}
        setCommentInput("")

    }
   
    
    if (!isPosting) {return (
        <Box  sx={{display:'flex',
                  flexDirection:'column',
                  justifyContent:'space-between',
                  px:{xs:'0', md:'5rem'},
                  py:'4rem'}}
                id='comment-submission'>
            
            <TextField  label="Comment" variant="outlined" multiline onChange={(e) =>{
                setCommentInput(e.target.value)
            }}/>
            <Button variant='text' color='secondary' onClick={(e) => {
                handleCommentSubmit(e)
            }}>Add comment</Button>
            <Snackbar open ={open}
                      onClose={handleClose}
                      autoHideDuration={6000}
                      message={isPosting? "Posting comment..." : commentPosted ? "Comment posted!" : ""}
                      anchorOrigin={ {vertical: 'top', horizontal: 'center'} }/>
            <Snackbar open ={isError}
                      onClose={handleClose}
                      autoHideDuration={6000}
                      message={`${commentErrorMsg}`}
                      anchorOrigin={ {vertical: 'top', horizontal: 'center'} }/>
                      
        </Box>
       
    )}
    

}

export default CommentSubmission