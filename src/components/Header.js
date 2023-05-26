import React, { useState } from "react";
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
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    "@media all": {
      minHeight: 128,
    },
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
              md: "flex",
            },
          }}
        >
          <img
            src="../logo.jpg"
            alt="logo"
            className=" rounded-4"
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
              lg: "flex",
            },
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
              xl: "none",
            },
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
              lg: "none",
            },
          }}
        >
          Mahali Mzuri
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            alignItems: "center",
            marginRight: "10px",
            display: { xs: "flex", md: "flex", lg: "none" },
            // position: "relative",
          }}
        >
          <IconButton
            id="demo-positioned-menu"
            size="large"
            aria-label="account of current user"
            aria-controls={
              Boolean(anchorElNav) ? "demo-positioned-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={Boolean(anchorElNav) ? "true" : undefined}
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "block", lg: "none" },
              // position: "absolute",
              // marginLeft:"200px"
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Link href="/" underline="none">
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link href="/services" underline="none">
                Services
              </Link>
            </MenuItem>
            {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href="/" underline="none">Home</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href="/services" underline="none">Services</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Rooms</Typography>
              </MenuItem> */}
          </Menu>
          {/* </IconButton> */}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "none", lg: "flex" },
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
              fontWeight: 600,
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
              fontWeight: 600,
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
              fontWeight: 600,
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
              fontWeight: 600,
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
              fontWeight: 600,
            }}
          >
            <Link href="/login" underline="none" sx={{ color: "#ffffff" }}>
              Login
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
