import { Box, ImageList, ImageListItem, ImageListItemBar, ListItemButton, Typography } from "@mui/material"
import { fetchUsers} from "../api"
import {useEffect, useState} from "react"

const LoginContainer = ({setUser}) => {
    const [allUsers, setAllUsers] = useState([])
    useEffect(()=>{
        fetchUsers()
          .then((res)=>{
            setAllUsers(res.data.users)
          }).catch((err) => {
            console.log(err)
          })
    }, [])

  const handleLogin = (e, user) =>{
          e.preventDefault()
          setUser({username: user.username, avatar_url: user.avatar_url})
            localStorage.setItem('username', user.username)
            localStorage.setItem('avatar', user.avatar_url)
  }

    console.log("hi")
    return (
    <Box sx={{pt:'4rem'}}>
        <Typography variant="h3" align="center">Select your user</Typography>
        <ImageList cols={2} sx={{px:4}}>
            {allUsers.map((user) => {
                return (
                <ImageListItem  key={user.username}>
                    <ListItemButton sx={{maxHeight: {xs: '10rem', md: '20rem'}}} 
                    onClick={(e) => {handleLogin(e, user)}}
                    >
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

export default LoginContainer