import {useState, useEffect} from 'react'
import { patchArticleVotes } from '../api'

const SingleArticleContainer = ({singleArticle, article_id}) => {
      const [articleVotes, setArticlevotes] = useState(0)
      const [isClicked, setIsClicked] = useState(false)
      const [isError, setIsError] = useState(false)
      useEffect(()=>{
        setArticlevotes(singleArticle.votes)
      }, [])
    const updateVotes = (buttonPressed) =>{
        let voteIncrement = 0
        if(buttonPressed === 'Upvote') {
            voteIncrement = 1
        }
        else voteIncrement = -1
        
            if(!isClicked){
                setIsClicked(true)
             patchArticleVotes(article_id, voteIncrement).then((res) =>{
                setArticlevotes(articleVotes + voteIncrement)
             }).catch(() =>{
                setIsError(true)
             })}

    }
    return (
        <article className="single-article">
            <h2>{singleArticle.title}</h2>
            <p className="article-date">Posted on {singleArticle.created_at.substr(0,10)}</p>
            <figure className = "single-article-img-figure">
                <img src={singleArticle.article_img_url} alt = {singleArticle.title} className="single-article-img"/>
            </figure>
            <section>
                <p>By {singleArticle.author}</p>
                
            </section>
            <section className="single-article-votes">
                <p>Votes: {articleVotes} </p>
                <button onClick={(e)=> {
                    updateVotes(e.target.innerText)
                }}>Upvote</button>
                <button onClick={(e)=>{
                    updateVotes(e.target.innerText)}}>Downvote</button>
                
            </section>
            {isError && (
  <p className="error"> Unable to add vote, please try again later! </p>)}
        </article>
    )
}

export default SingleArticleContainer