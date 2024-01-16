import { Box, ImageList, ImageListItem, ImageListItemBar, ListItemButton, Typography } from "@mui/material"
import { fetchUsers} from "../api"
import {useEffect, useState} from "react"

const LoginPage = () => {
    const [allUsers, setAllUsers] = useState([])
    useEffect(()=>{
        fetchUsers()
          .then((res)=>{
            setAllUsers(res.data.users)
          })
    }, [])

    console.log(allUsers)
    return (
    <Box sx={{pt:'4rem'}}>
        <Typography variant="h3" align="center">Select your user</Typography>
        <ImageList cols={2} sx={{px:4}}>
            {allUsers.map((user) => {
                return (
                <ImageListItem  key={user.username}>
                    <ListItemButton sx={{maxHeight: {xs: '10rem', md: '20rem'}}} >
                    <img 
                      srcSet={user.avatar_url}
                      alt={user.username}
                      style={{
                        width: "100%",
                        height:"100%",
                        objectFit: "contain",
                        margin: "auto",
                      }}/>
                      <ImageListItemBar
                    title={user.username}
                    subtitle={user.name}/>
                    </ListItemButton>
                </ImageListItem>
                
                )
            })}

        </ImageList>
    </Box>
)}

export default LoginPage