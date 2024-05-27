
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from '../assets/logo-medium.png';

const pages = ["Sürekli Eğitim Merkezi", "Pricing", "Blog"];
const settings = ["Profil", "İlanlarım", "İlan Ver", "Mesajlarım", "Çıkış Yap"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSEM, setAnchorElSEM] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenSEMMMenu = (event) => {
    setAnchorElSEM(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseSEMMenu = () => {
    setAnchorElSEM(null);
  };

  const handleMenuClick = (path) => {
    handleCloseSEMMenu();
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: 'pointer',
            }}
          >
            <img src={logo} alt="logo" style={{ height: '40px', marginRight: '10px', borderRadius:'5px' }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                page === "Sürekli Eğitim Merkezi" ? (
                  <div key={page}>
                    <Button
                      onClick={handleOpenSEMMMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                    <Menu
                      anchorEl={anchorElSEM}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElSEM)}
                      onClose={handleCloseSEMMenu}
                    >
                      <MenuItem onClick={() => handleMenuClick('/request-form')}>
                        <Typography textAlign="center">Ders İste</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleCloseSEMMenu}>
                        <Typography textAlign="center">Ders Ver</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleCloseSEMMenu}>
                        <Typography textAlign="center">Dersleri Gör</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleCloseSEMMenu}>
                        <Typography textAlign="center">Ders Seç</Typography>
                      </MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                )
              ))}
            </Menu>
          </Box>

          <Box
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              cursor: 'pointer',
            }}
          >
            <img src={logo} alt="logo" style={{ height: '40px', marginRight: '10px' }} />
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              page === "Sürekli Eğitim Merkezi" ? (
                <div key={page}>
                  <Button
                    onClick={handleOpenSEMMMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                  <Menu
                    anchorEl={anchorElSEM}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElSEM)}
                    onClose={handleCloseSEMMenu}
                  >
                    <MenuItem onClick={() => handleMenuClick('/request-form')}>
                      <Typography textAlign="center">Ders İste</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseSEMMenu}>
                      <Typography textAlign="center">Ders Ver</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseSEMMenu}>
                      <Typography textAlign="center">Dersleri Gör</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseSEMMenu}>
                      <Typography textAlign="center">Ders Seç</Typography>
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              )
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ayarları Aç">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleMenuClick(setting === 'Profil' ? '/profile' : '#')}>
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
