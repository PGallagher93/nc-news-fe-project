import { Box, Typography } from "@mui/material"
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
    <Box>
        <Typography>Select your user</Typography>
    </Box>
)}

export default LoginPage