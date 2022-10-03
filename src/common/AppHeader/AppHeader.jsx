import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

import { MyComponent } from "./style";
const pages = ["Movies", "Tv Shows"];

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AppHeader = ({
  handleOpenNavMenu,
  handleOpenUserMenu,
  handleCloseNavMenu,
  handleCloseUserMenu,
  anchorElNav,
  anchorElUser,
}) => {
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <MyComponent variant="h6" noWrap component="a" href="/">
            LOGO
          </MyComponent>
          <Stack
            direction="row"
            spacing={2}
            sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Button color="inherit" component={Link} to="/">
              Movies
            </Button>
            <Button color="inherit" component={Link} to="/tv">
              TV Shows
            </Button>
          </Stack>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
