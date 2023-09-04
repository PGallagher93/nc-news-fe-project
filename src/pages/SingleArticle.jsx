import {useParams} from "react-router-dom"

const SingleArticle = ({articles}) =>{
   
    const {article_id} = useParams()
    const singleArticle = articles.find((article) => {
        
        return article.article_id === +article_id
    })
    return (
        <article className="single-article">
            <h2>{singleArticle.title}</h2>
            <p className="article-date">Posted on {singleArticle.created_at.substr(0,10)}</p>
            <figure>
                <img src={singleArticle.article_img_url} alt = {singleArticle.title} className="single-article-img"/>
            </figure>
            <section>
                <p>By {singleArticle.author}</p>
            </section>
        </article>
    )

}

export default SingleArticle

