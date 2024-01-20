import { ImageList, ImageListItem, useMediaQuery, ImageListItemBar, ListItemButton, Typography } from "@mui/material"
import{useEffect} from 'react'
import HomeArticleContainer from "../Components/HomeArticleContainer"
import Box from '@mui/system/Box'
import TopicBar from "../Components/TopicBar"
const Homepage =({articles, isLoading, setArticleQuery}) =>{
const matches = useMediaQuery('(min-width:600px)')
   useEffect(()=>{
    setArticleQuery((currVal) =>{
        return {...currVal, topic:null}
    })
   }, [])
   
    const articlesToDisplay = articles.slice(0, 10)
    if(isLoading){
        return (
            <p>Loading...</p>
        )
    }
    
    const mostPopularArticles = articles.sort((a, b) => { return b.votes - a.votes}).slice(0,10)
   
    return (
        <Box sx={{pt:'4rem',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  mx:'10rem'
                  }}>
        <Typography 
        variant="h3"
        align="left"
        >Latest stories</Typography>
        <ImageList cols={matches ? 5 : 1} >
            {articlesToDisplay.map((article) =>{
                return (
                    <ImageListItem key={article.title} sx={{width:{md: '19vw'},
                                                            height:{xs:'25vh'}}}>
                        <ListItemButton sx={{padding: 0, height:'25vh'}}>
                            <img 
                             srcSet={article.article_img_url}
                             style={{
                                width:'100%',
                                height:'100%',
                                objectFit:'contain'
                             }}/>
                             <ImageListItemBar
                              title={article.title}
                              subtitle={article.author}/>
                        </ListItemButton>
                    </ImageListItem>
                )
                
            })}
        </ImageList>
        <Typography
        variant='h3'
        alight='left'>Popular stories</Typography>
        <ImageList cols={matches ? 5 : 1} >
            {mostPopularArticles.map((article) =>{
                return (
                    <ImageListItem key={article.title} sx={{width:{md: '19vw'},
                                                            height:{xs:'25vh'}}}>
                        <ListItemButton sx={{padding: 0, height:'25vh'}}>
                            <img 
                             srcSet={article.article_img_url}
                             style={{
                                width:'100%',
                                height:'100%',
                                objectFit:'contain'
                             }}/>
                             <ImageListItemBar
                              title={article.title}
                              subtitle={article.author}/>
                        </ListItemButton>
                    </ImageListItem>
                )
                
            })}
        </ImageList>
        </Box>
    )
}

export default Homepage
