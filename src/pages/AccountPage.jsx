import { Box } from "@mui/material";
import LoginContainer from "../Components/User/LoginContainer";
import UserContainer from "../Components/User/UserContainer";


const AccountPage = ({ user, setUser, isLoading, setIsLoading }) => {
  return (
    <Box>
      {user.username === "" ? (
        <LoginContainer
          setUser={setUser}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : (
        <UserContainer user={user} />
      )}
    </Box>
  );
};

export default AccountPage;
