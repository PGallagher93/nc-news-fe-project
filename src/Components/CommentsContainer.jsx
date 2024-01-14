import {useState, useEffect} from 'react'
import CommentList from './CommentList'
import {fetchComments} from '../api'
import CommentSubmission from './CommentSubmission'
import { Button, Stack, Typography } from '@mui/material'
import Box from '@mui/system/Box'


const CommentsContainer = ({article_id, user, articleCommentCount}) =>{
    
    const [commentAdded, setCommentAdded] = useState("")
    const [articleComments, setArticleComments]=useState([])
    const [commentDeleted, setCommentDeleted] = useState("")
    useEffect(()=>{
        
        fetchComments(article_id).then((res) =>{
            setArticleComments(res.data.comments)
        })
    }, [commentAdded, commentDeleted])

    
    return (
        <Box id='comments' sx={{pt:'4rem'}}>
            <Stack direction='row' justifyContent="space-between" sx={{px:{xs:'0', md:"5rem"}}}>
                <Typography variant='h5'>comments {articleCommentCount}</Typography>
                <Button variant='text' color='secondary' onClick={() =>
                document.querySelector("#comment-submission").scrollIntoView({
                  behavior: "smooth",
                })
              }>Add comment</Button>
            </Stack>
            <CommentList setCommentDeleted={setCommentDeleted} articleComments={articleComments} user={user}/>
            <CommentSubmission  article_id={article_id} user={user} setArticleComments={setArticleComments} setCommentAdded={setCommentAdded} />
        </Box>
    )
}

export default CommentsContainer

