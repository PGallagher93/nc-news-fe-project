import ArticleCard from "./ArticleCard"
import SortOptions from "./SortOptions"

const ArticleContainer = ({articles, setArticleQuery}) =>{
   console.log(articles)
    return (
        <div className="article-container">
        <SortOptions setArticleQuery ={setArticleQuery} />
        <ul className="article-list">
            {articles.map((article)=>{
                
               return( 
               <ArticleCard key = {article.article_id}article={article}/>
               )           
            })}
        </ul>
        </div>
    )
}

export default ArticleContainer