import {useState, useEffect} from 'react'
import { patchArticleVotes } from '../api'
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import { ThumbDown, ThumbUp } from '@mui/icons-material'

const SingleArticleContainer = ({singleArticle, article_id}) => {
      const [articleVotes, setArticlevotes] = useState(0)
      const [upvoteClicked, setUpvoteClicked] = useState(false)
      const [downvoteClicked, setDownvoteClicked] = useState(false)
      const [isError, setIsError] = useState(false)
      const [prevVote, setPrevVote] = useState(null)
      useEffect(()=>{
        setArticlevotes(singleArticle.votes)
      }, [])
    
      
        const handleVote = (e, type, vote) =>{
            
            upvoteClicked ? vote -= 1 : downvoteClicked ? vote += 1 : vote === vote
            if(!upvoteClicked && type === 'upvote') {
                
                setUpvoteClicked(true)
                setDownvoteClicked(false)
                setArticlevotes(articleVotes + vote)
                patchArticleVotes(article_id, vote).catch(() =>{
                    setIsError(true)
                 })}
             else if(upvoteClicked && type === 'upvote'){
                setUpvoteClicked(false)
                setArticlevotes(articleVotes - 1)
                patchArticleVotes(article_id, -1).catch(() =>{
                    setIsError(true)
                 })

             }
            else if(!downvoteClicked && type === 'downvote') {
                setDownvoteClicked(true)
                setUpvoteClicked(false)
                setArticlevotes(articleVotes + vote)
                patchArticleVotes(article_id, vote).catch(() =>{
                    setIsError(true)
                 })}

                 else if(downvoteClicked && type === 'downvote'){
                    setDownvoteClicked(false)
                    setArticlevotes(articleVotes + 1)
                    patchArticleVotes(article_id, 1).catch(() =>{
                        setIsError(true)
                     })
    
                 }
            }
            

    
    return (
        <Box>
            <Card sx={{px: {xs:'0', md: '5rem'}}}>
                <CardContent sx={{textAlign:'center'}}>
                   <Typography variant='h5'>
                    {singleArticle.title}
                   </Typography>
                </CardContent>
                <Stack direction='row' justifyContent='space-between' padding='1rem'>
                    <Typography>
                      By {singleArticle.author}
                    </Typography>
                    <Typography>
                      Date posted: {singleArticle.created_at.substr(0,10)}
                    </Typography>

                </Stack>
                <Stack alignItems='center'>
                <CardMedia
                    component="img"
                    src={singleArticle.article_img_url}
                    sx={{height:{xs:'30vh', md:'50vh'},
                        objectFit:'cover',
                        aspectRatio:'1/1',
                        }}>
                </CardMedia>
                </Stack>
                <CardContent sx={{px:{xs:'0.5', md:'0'},
                                  py:'1'}}>
                    <Typography>{singleArticle.body}</Typography>
                </CardContent>
                <CardActions sx={{display:'flex', 
                                  justifyContent:'space-between',
                                  flexDirection:'row'}}>
                    <Stack direction='row'>
                        <IconButton color= {upvoteClicked ? 'success' : 'secondary'} onClick={(e)=> {
                            handleVote(e, 'upvote', 1)
                            }}>
                            <ThumbUp/>
                        </IconButton>
                        <Typography sx={{pt:1}}>{articleVotes}</Typography>
                        <IconButton color={downvoteClicked ? 'error' : 'secondary'} onClick={(e)=>{
                            handleVote(e, 'downvote', -1)}}>
                            <ThumbDown />
                        </IconButton>
                    </Stack>
                    <Stack direction='row'>
                        <IconButton>
                            
                        </IconButton>
                    </Stack>

                </CardActions>
            </Card>
        </Box>
    //     <IconButton color="secondary" aria-label="add an alarm">
    //     <AlarmIcon />
    //   </IconButton>
//         <article className="single-article">
//             <h2>{singleArticle.title}</h2>
//             <p className="article-date">Posted on {singleArticle.created_at.substr(0,10)}</p>
//             <figure className = "single-article-img-figure">
//                 <img src={singleArticle.article_img_url} alt = {singleArticle.title} className="single-article-img"/>
//             </figure>
//             <section>
//                 <p>By {singleArticle.author}</p>
                
//             </section>
//             <section>
//                 <p>{singleArticle.body}</p>
//             </section>

//             <section className="single-article-votes">
//                 <p>Votes: {articleVotes} </p>
//                 <button onClick={(e)=> {
                    
//                     handleUpvote(e)
//                 }}>Upvote</button>
//                 <button onClick={(e)=>{
//                     handleDownvote(e)}}>Downvote</button>
                
//             </section>
//             {isError && (
//   <p className="error"> Unable to add vote, please try again later! </p>)}
//         </article>
    )
}

export default SingleArticleContainer