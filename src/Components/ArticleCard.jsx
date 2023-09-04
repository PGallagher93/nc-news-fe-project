const ArticleCard = ({article}) => {
    return (
    <li className = "article-card">
        <p>{article.title}</p>
        <img className="article-thumbnail" src={article.article_img_url} alt={article.title}/>
        <p>{article.author}</p>
    </li>
    )
}

export default ArticleCard