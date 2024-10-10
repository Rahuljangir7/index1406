import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const pages = ["Home", "Service", "About", "Contact"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "rgba(0, 0, 0, 0.501)" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              sx={{
                mr: 8,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                lineHeight: "1.5rem",
                color: "inherit",
                textAlign:"center",
              }}
              className="hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:bg-clip-text"
            >
              HEALTH-CARE <br /> HOSPITAL
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                fontSize: "calc(13px + 2vw)",
              }}
            >
              HEALTH-CARE HOSPITAL
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                gap: 9,
                alignItems: "center",
              }}
            >
              {pages.map((page ,index) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 3,
                    color: "rgba(255, 255, 255, 0.8)",
                    display: "block",
                    fontWeight: "bolder",
                    letterSpacing: "0.1rem",
                    fontSize: "1.2rem",
                  }}
                  className="hover:text-green-400"
                >
                  <Link to={`section${index}`} smooth={true} duration={1000}>{page}</Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

export const Nav2 = () => {
  return (
    <>
      <div>
        <ul className="flex font-extrabold lg:gap-20 gap-5 items-center justify-center text-[calc(1px+2vw)] flex-wrap">
          <li className="hover:text-green-700 cursor-pointer">HOSPITAL</li>
          <li className="hover:text-green-700 cursor-pointer">ROOMS</li>
          <li className="hover:text-green-700 cursor-pointer">MACHINES</li>
          <li className="hover:text-green-700 cursor-pointer">AMBULANCES</li>
          <li className="hover:text-green-700 cursor-pointer">
            MEDICAL STORES
          </li>
        </ul>
      </div>
    </>
  );
};
