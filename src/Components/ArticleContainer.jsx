import ArticleCard from "./ArticleCard"

const ArticleContainer = ({articles}) =>{
    console.log(articles)
    return (
        <ul className="article-list">
            {articles.map((article)=>{
                console.log(article)
               return( 
               <ArticleCard key = {article.article_id}article={article}/>
               )           
            })}
        </ul>
    )
}

export default ArticleContainer