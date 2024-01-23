import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Dropdown } from "@mui/base/Dropdown";
import { fetchTopics } from "../../api";
import { handleLogout } from "../../utils";
import { Avatar, Paper } from "@mui/material";

const NavBar = ({ user }) => {
  const [linksActivated, setLinksActivated] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileMenuActivated, setProfileMenuActivated] = useState(false);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetchTopics().then((res) => {
      setTopics(res.data.topics);
    });
  }, []);

  const handleMenu = (event) => {
    setProfileMenuActivated(true);
    setAnchorEl(event.currentTarget);
  };

  const handleLinks = (event) => {
    setAnchorEl(event.currentTarget);
    setLinksActivated(true);
  };

  const handleClose = () => {
    setLinksActivated(false);
    setAnchorEl(null);
    setProfileMenuActivated(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'black',maxWidth: "1300px", margin: "auto" }}>
        <Toolbar>
          <Dropdown>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, p:0}}
              onClick={handleLinks}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
             open={Boolean(linksActivated)}
              onClose={handleClose}
            >
              <Paper elevation={0}>
              <Link to={`/`}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
              <Link to={`/articles`}>
                <MenuItem onClick={handleClose}>All</MenuItem>
              </Link>
              {topics.map((topic) => {
                return (
                  <Link key={topic.slug} to={`/${topic.slug}/articles`}>
                    <MenuItem onClick={handleClose}>{topic.slug}</MenuItem>
                  </Link>
                );
              })}
              </Paper>
            </Menu>
          </Dropdown>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'}>
            NC News
            </Link>
          </Typography>
          

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{p:0}}
            > {user.username === "" ? <Avatar /> : <Avatar src={user.userAvatar}/>}
              
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(profileMenuActivated)}
              onClose={handleClose}
            >
              {" "}
              <Link to="/account">
                <MenuItem onClick={handleClose}>
                  {user.username === "" ? "User selection" : "profile"}
                </MenuItem>
              </Link>
              
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
