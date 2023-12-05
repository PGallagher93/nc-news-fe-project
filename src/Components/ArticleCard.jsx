import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const ArticleCard = ({article}) => {
    console.log(article.article_img_url)
    return (
    <li className = "article-card">
        <Card>
            <CardMedia
                component="img"
                src={article.article_img_url}
                height="140"
            />
            <CardContent>
                <Typography variant='h6'>
                    {article.title}
                </Typography>
            </CardContent>
        
        </Card>
        <p>{article.title}</p>
        <Link to={`/articles/${article.article_id}`}>
        <img className="article-thumbnail" src={article.article_img_url} alt={article.title}/>
        </Link >
        <p>{article.author}</p>
    </li>
    )
}

export default ArticleCard