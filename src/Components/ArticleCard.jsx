import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/system/Box'
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
            <CardContent 
                sx={{display:'flex',
                     flexDirection:'row',
                     justifyContent:'space-between'
                    }}
            >
                <Box
                    sx={{display:'flex'}}
                >
                    <FavoriteIcon sx={{marginRight:1}}/>
                    <Typography>{`${article.votes}`}</Typography>
                </Box>
                <Box
                    sx={{display:'flex'}}
                >
                    <CommentIcon sx={{marginRight:1}}/> 
                    <Typography>{`${article.comment_count}`}</Typography>
                </Box>
            </CardContent>
        
        </Card>
        </Link>
        
        
    </li>
    )
}

export default ArticleCard