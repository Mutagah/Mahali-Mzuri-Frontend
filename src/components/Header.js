// import * as React from "react";

// import {
//   AppBar,
//   Avatar,
//   Box,
//   Button,
//   Link,
//   Menu,
//   MenuItem,
//   Toolbar,
//   IconButton,
//   Typography
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import MenuIcon from "@mui/icons-material/Menu";
// export default function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//     alignItems: "flex-start",
//     paddingTop: theme.spacing(1),
//     paddingBottom: theme.spacing(2),
//     // Override media queries injected by theme.mixins.toolbar
//     "@media all": {
//       minHeight: 128
//     }
//   }));
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   return (
//     <AppBar position="sticky" color="primary">
//       <StyledToolbar>
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="open drawer"
//           sx={{
//             mr: 2,
//             display: {
//               xs: "none",
//               md: "flex",
//             },
//           }}
//         >
//           <img
//             src="../logo.jpg"
//             alt="logo"
//             className=" rounded-4"
//             height="70"
//             width="100"
//           />
//         </IconButton>
//         <Typography
//           variant="h2"
//           noWrap
//           component="div"
//           sx={{
//             fontFamily: "Comfortaa",
//             flexGrow: 1,
//             alignSelf: "flex-end",
//             justifyContent: "center",
//             display: {
//               xs: "none",
//               md: "none",
//               lg: "flex",
//             },
//           }}
//         >
//           Mahali Mzuri
//         </Typography>
//         <Typography
//           variant="h3"
//           noWrap
//           component="div"
//           sx={{
//             fontFamily: "Comfortaa",
//             flexGrow: 1,
//             alignSelf: "flex-end",
//             justifyContent: "center",
//             display: {
//               xs: "none",
//               md: "flex",
//               lg: "none",
//               xl: "none",
//             },
//           }}
//         >
//           Mahali Mzuri
//         </Typography>
//         <Typography
//           variant="h4"
//           noWrap
//           component="div"
//           sx={{
//             fontFamily: "Comfortaa",
//             flexGrow: 1,
//             alignSelf: "flex-start",
//             display: {
//               xs: "flex",
//               md: "none",
//               lg: "none",
//             },
//           }}
//         >
//           Mahali Mzuri
//         </Typography>
//         <Box
//           sx={{
//             mt: 3,
//             mr: 12,
//             flexGrow: 1,
//             display: { xs: "flex", md: "flex", lg: "none" },
//           }}
//         >
//           <IconButton
//             size="large"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//           >
//             <MenuIcon />
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "none", md: "block" },
//               }}
//             >
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">Home</Typography>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">Services</Typography>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">About</Typography>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">Rooms</Typography>
//               </MenuItem>
//             </Menu>
//           </IconButton>
//         </Box>
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { xs: "none", md: "none", lg: "flex" },
//           }}
//         >
//           <Button
//             onClick={() => {
//               handleCloseNavMenu();
//             }}
//             sx={{
//               my: 2,
//               px: 2,
//               color: "white",
//               display: "block",
//               fontSize: 17,
//               fontWeight: 600,
//             }}
//           >
//             <Link href="/" underline="none" sx={{ color: "#ffffff" }}>
//               Home
//             </Link>
//           </Button>
//           <Button
//             onClick={() => {
//               handleCloseNavMenu();
//             }}
//             sx={{
//               my: 2,
//               px: 2,
//               color: "white",
//               display: "block",
//               fontSize: 17,
//               fontWeight: 600,
//             }}
//           >
//             <Link href="/services" underline="none" sx={{ color: "#ffffff" }}>
//               Services
//             </Link>
//           </Button>
//           <Button
//             onClick={handleCloseNavMenu}
//             sx={{
//               my: 2,
//               px: 2,
//               color: "white",
//               display: "block",
//               fontSize: 17,
//               fontWeight: 600,
//             }}
//           >
//             <Link href="/about" underline="none" sx={{ color: "#ffffff" }}>
//               About
//             </Link>
//           </Button>
//           <Button
//             onClick={handleCloseNavMenu}
//             sx={{
//               my: 2,
//               px: 2,
//               color: "white",
//               display: "block",
//               fontSize: 17,
//               fontWeight: 600,
//             }}
//           >
//             <Link href="/rooms" underline="none" sx={{ color: "#ffffff" }}>
//               Rooms
//             </Link>
//           </Button>
//           <Button
//             onClick={handleCloseNavMenu}
//             sx={{
//               my: 2,
//               px: 2,
//               color: "white",
//               display: "block",
//               fontSize: 17,
//               fontWeight: 600,
//             }}
//           >
//             <Link href="/login" underline="none" sx={{ color: "#ffffff" }}>
//               Login
//             </Link>
//           </Button>
//         </Box>
//         <IconButton sx={{ p: 0, mr: 5 }}>
//           <Avatar
//             sx={{ p: 4 }}
//             alt="Remy Sharp"
//             src="/static/images/avatar/2.jpg"
//           />
//         </IconButton>
//       </StyledToolbar>
//     </AppBar>
//   );
// }
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;