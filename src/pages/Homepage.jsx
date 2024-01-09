import { Typography } from "@mui/material"
import{useEffect} from 'react'
import HomeArticleContainer from "../Components/HomeArticleContainer"
import Box from '@mui/system/Box'
import TopicBar from "../Components/TopicBar"
const Homepage =({articles, isLoading, setArticleQuery}) =>{
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
    return (
        <Box sx={{pt:'4rem',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center'
                  }}>
        <Typography 
        variant="h3"
        align="center"
        >Latest stories</Typography>
        <HomeArticleContainer articles={articlesToDisplay}/>
        </Box>
    )
}

export default Homepage
