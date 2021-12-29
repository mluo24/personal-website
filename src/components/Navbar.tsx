import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const socials = [
  {
    icon: <MailOutlineIcon />,
    url: "mailto:mml267@cornell.edu",
  },
  {
    icon: <GitHubIcon />,
    url: "https://github.com/mluo24",
  },
  {
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/miranda-luo",
  },
]

const pages = ["About", "Experience", "Projects", "Contact"]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "colors.darkest",
          color: "colors.isabelline",
        }}
        elevation={0}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button variant="outlined" href="main.pdf" target="_blank">
              Resume
            </Button>
            {socials.map((social) => (
              <IconButton
                key={social.url}
                color="primary"
                href={social.url}
                target="_blank"
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />

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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}
export default Navbar
