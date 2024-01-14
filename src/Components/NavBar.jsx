import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Dropdown } from '@mui/base/Dropdown'
import { fetchTopics } from '../api';


const NavBar = () =>{
  
  const [linksActivated, setLinksActivated] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileMenuActivated, setProfileMenuActivated] = useState(false)
  const [topics, setTopics] = useState([])
  useEffect(()=>{
      fetchTopics().then((res)=>{
          setTopics(res.data.topics)
      })

  }, [])

  const handleMenu = (event) => {
    setProfileMenuActivated(true)
    setAnchorEl(event.currentTarget);
  };

  const handleLinks = (event) => {
    
    setAnchorEl(event.currentTarget)
    setLinksActivated(true)

  }

  const handleClose = () => {
    setLinksActivated(false)
    setAnchorEl(null);
    setProfileMenuActivated(false)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Dropdown>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleLinks}
          >
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(linksActivated)}
                onClose={handleClose}
              >
                  <Link to= {`/`}>
                    <MenuItem onClick = {handleClose}>Home</MenuItem>
                  </Link>
                {topics.map((topic)=>{
                  return (
                    <Link key={topic.slug} to={`/${topic.slug}/articles`}>
                      <MenuItem onClick = {handleClose}>{topic.slug}</MenuItem>
                    </Link>
                  )
                })}
                
              </Menu>
          </Dropdown>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           NC News
          </Typography>
          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(profileMenuActivated)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar