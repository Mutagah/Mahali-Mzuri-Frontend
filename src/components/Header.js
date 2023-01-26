import * as React from "react";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    "@media all": {
      minHeight: 128
    }
  }));
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="sticky" color="primary">
      <StyledToolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{
            mr: 2,
            display: {
              xs: "none",
              md: "flex"
            }
          }}
        >
          <img
            src="../logo.jpg"
            alt="logo"
            class=" rounded-4"
            height="70"
            width="100"
          />
        </IconButton>
        <Typography
          variant="h2"
          noWrap
          component="div"
          sx={{
            fontFamily: "Comfortaa",
            flexGrow: 1,
            alignSelf: "flex-end",
            justifyContent: "center",
            display: {
              xs: "none",
              md: "none",
              lg: "flex"
            }
          }}
        >
          Mahali Mzuri
        </Typography>
        <Typography
          variant="h3"
          noWrap
          component="div"
          sx={{
            fontFamily: "Comfortaa",
            flexGrow: 1,
            alignSelf: "flex-end",
            justifyContent: "center",
            display: {
              xs: "none",
              md: "flex",
              lg: "none",
              xl: "none"
            }
          }}
        >
          Mahali Mzuri
        </Typography>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{
            fontFamily: "Comfortaa",
            flexGrow: 1,
            alignSelf: "flex-start",
            display: {
              xs: "flex",
              md: "none",
              lg: "none"
            }
          }}
        >
          Mahali Mzuri
        </Typography>
        <Box
          sx={{
            mt: 3,
            mr: 12,
            flexGrow: 1,
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "none", md: "block" }
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Services</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Rooms</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
          </IconButton>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "none", lg: "flex" }
          }}
        >
          <Button
            onClick={() => {
              handleCloseNavMenu();
            }}
            sx={{
              my: 2,
              px: 2,
              color: "white",
              display: "block",
              fontSize: 17,
              fontWeight: 600
            }}
          >
            <Link href="/" underline="none" sx={{ color: "#ffffff" }}>
              Home
            </Link>
          </Button>
          <Button
            onClick={() => {
              handleCloseNavMenu();
            }}
            sx={{
              my: 2,
              px: 2,
              color: "white",
              display: "block",
              fontSize: 17,
              fontWeight: 600
            }}
          >
            <Link href="/services" underline="none" sx={{ color: "#ffffff" }}>
              Services
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              px: 2,
              color: "white",
              display: "block",
              fontSize: 17,
              fontWeight: 600
            }}
          >
            <Link href="/about" underline="none" sx={{ color: "#ffffff" }}>
              About
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              px: 2,
              color: "white",
              display: "block",
              fontSize: 17,
              fontWeight: 600
            }}
          >
            <Link href="/rooms" underline="none" sx={{ color: "#ffffff" }}>
              Rooms
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              px: 2,
              color: "white",
              display: "block",
              fontSize: 17,
              fontWeight: 600
            }}
          >
            <Link href="contact" underline="none" sx={{ color: "#ffffff" }}>
              Contact
            </Link>
          </Button>
        </Box>
        <IconButton sx={{ p: 0, mr: 5 }}>
          <Avatar
            sx={{ p: 4 }}
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
}
