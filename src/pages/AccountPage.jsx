import { Box} from "@mui/material"
import LoginContainer from "../Components/LoginContainer"
import UserContainer from "../Components/UserContainer"
import { useEffect } from "react"

const AccountPage = ({user, setUser}) => {
   
    return (
    <Box >
       {user.username === '' ? 
       <LoginContainer setUser={setUser}/> :
       <UserContainer user={user} />}
    </Box>
)}

export default AccountPage