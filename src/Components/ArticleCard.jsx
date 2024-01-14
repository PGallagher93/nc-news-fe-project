import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/system/Box'
import { ThumbUp } from '@mui/icons-material';
const ArticleCard = ({article}) => {
    
    return (
    <li className = "article-card">
        <Link to={`/articles/${article.article_id}`}>
        <Card sx={{ width: {xs: '75vw', md:'50vw'}, 
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
                    <ThumbUp color='secondary' sx={{marginRight:1}}/>
                    <Typography>{`${article.votes}`}</Typography>
                </Box>
                <Box
                    sx={{display:'flex'}}
                >
                    <CommentIcon color ='secondary' sx={{marginRight:1}}/> 
                    <Typography>{`${article.comment_count}`}</Typography>
                </Box>
            </CardContent>
        
        </Card>
        </Link>
        
        
    </li>
    )
}

export default ArticleCard