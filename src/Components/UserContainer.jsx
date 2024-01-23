import {
  Box,
  Button,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { handleLogout } from "../utils";
const UserContainer = ({ user }) => {
  return (
    <Box
      sx={{
        pt: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ImageListItem>
        <img
          srcSet={user.userAvatar}
          alt={user.username}
          style={{
            width: { xs: "100vw", md: "25vw" },
            height: "25vh",
          }}
        />
        <ImageListItemBar title={user.username} />
      </ImageListItem>
      <Button
        component={Link}
        to="/"
        onClick={(e) => {
          handleLogout(e);
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserContainer;
