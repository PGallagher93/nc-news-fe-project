import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment';
const ArticleCard = ({article}) => {
    console.log(article)
    return (
    <li className = "article-card">
        <Link to={`/articles/${article.article_id}`}>
        <Card sx={{ width: '75vw', 
                    margin: 2}}>
            <CardMedia
                component="img"
                src={article.article_img_url}
                height='140'
                
                
            />
            <CardContent
            >
                <Typography variant='h6'>
                    {article.title}
                </Typography>
            </CardContent>
            <cardContent>
            <FavoriteIcon sx={{marginRight:1}}/>
                <strong>{`${article.votes}`}</strong>
                <CommentIcon sx={{maringRight:1}}/>
                <strong>{`${article.comment_count}`}</strong>
            </cardContent>
        
        </Card>
        </Link>
        
        
    </li>
    )
}

export default ArticleCard