import ArticleCard from "./ArticleCard"

const ArticleContainer = ({articles}) =>{
   
    return (
        <ul className="article-list">
            {articles.map((article)=>{
                
               return( 
               <ArticleCard key = {article.article_id}article={article}/>
               )           
            })}
        </ul>
    )
}

export default ArticleContainer