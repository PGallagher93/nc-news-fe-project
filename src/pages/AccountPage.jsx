import { Box} from "@mui/material"
import LoginContainer from "../Components/LoginContainer"
import UserContainer from "../Components/UserContainer"


const AccountPage = ({user}) => {
    
    return (
    <Box >
       {user === '' ? 
       <LoginContainer/> :
       <UserContainer user={user} />}
    </Box>
)}

export default AccountPage