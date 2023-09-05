import {Link} from 'react-router-dom'

const ArticleCard = ({article}) => {
    return (
    <li className = "article-card">
        <p>{article.title}</p>
        <Link to={`/articles/${article.article_id}`}>
        <img className="article-thumbnail" src={article.article_img_url} alt={article.title}/>
        </Link >
        <p>{article.author}</p>
    </li>
    )
}

export default ArticleCard