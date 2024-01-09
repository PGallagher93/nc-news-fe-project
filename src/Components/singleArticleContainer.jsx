import {useState, useEffect} from 'react'
import { patchArticleVotes } from '../api'
import { Box, Card, CardContent, Typography } from '@mui/material'

const SingleArticleContainer = ({singleArticle, article_id}) => {
      const [articleVotes, setArticlevotes] = useState(0)
      const [upvoteClicked, setUpvoteClicked] = useState(false)
      const [DownvoteClicked, setDownvoteClicked] = useState(false)
      const [isError, setIsError] = useState(false)
      useEffect(()=>{
        setArticlevotes(singleArticle.votes)
      }, [])
    
      console.log(singleArticle)
    const handleUpvote = (e) =>{
        
        if(!upvoteClicked) {
            e.target.classList.add("vote-button-clicked")
            e.currentTarget.parentNode.childNodes[2].classList.remove("vote-button-clicked")
            setUpvoteClicked(true)
            setDownvoteClicked(false)
            setArticlevotes(articleVotes + 1)
            patchArticleVotes(article_id, 1).catch(() =>{
                setIsError(true)
             })}
        }

        const handleDownvote = (e) =>{
            
            if(!DownvoteClicked) {
                e.target.classList.add("vote-button-clicked")
                e.currentTarget.parentNode.childNodes[1].classList.remove("vote-button-clicked")
                setDownvoteClicked(true)
                setUpvoteClicked(false)
                setArticlevotes(articleVotes - 1)
                patchArticleVotes(article_id, -1).catch(() =>{
                    setIsError(true)
                 })}
            }
    
    return (
        <Box>
            <Card>
                <CardContent>
                   <Typography variant='h5'>
                    {singleArticle.title}
                   </Typography>
                </CardContent>
                <cardContent>
                    <Typography>
                      
                    </Typography>
                    <Typography>

                    </Typography>
                </cardContent>
            </Card>
        </Box>
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