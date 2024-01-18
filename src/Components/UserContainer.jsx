import { Box, Typography } from "@mui/material"

const UserContainer = ({user}) => {
    
    return (
        <Box sx={{pt:'4rem'}}>
        <Typography>{user.username}</Typography>
        </Box>
    )
}

export default UserContainer