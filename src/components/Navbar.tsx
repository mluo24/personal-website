import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Button from "@mui/material/Button"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import CloseIcon from "@mui/icons-material/Close"
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  useScrollTrigger,
} from "@mui/material"
import { ChildrenPageTypes } from "../types/pagetypes"
import neutral from "../themeColors"
import { useState } from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

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

const pages = [
  { name: "About", url: "#" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" },
]

// https://mui.com/components/app-bar/#scrolling
function ElevationScroll(props: ChildrenPageTypes) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const socialBar = (
  <>
    <Button variant="outlined" href="main.pdf" target="_blank" sx={{ mr: 1 }}>
      Resume
    </Button>
    {socials.map((social) => (
      <IconButton
        key={social.url}
        href={social.url}
        target="_blank"
        sx={{ mx: 0.5 }}
      >
        {social.icon}
      </IconButton>
    ))}
  </>
)

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenNavMenu = () => {
    setOpen(true)
  }

  const handleCloseNavMenu = () => {
    setOpen(false)
  }

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "background.default",
        }}
        elevation={0}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>{socialBar}</Box>

          <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="site menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={open}
              onClose={handleCloseNavMenu}
              sx={{
                width: 500,
                display: { xs: "block", md: "none" },
              }}
            >
              <DrawerHeader>
                <IconButton onClick={handleCloseNavMenu}>
                  <CloseIcon />
                </IconButton>
              </DrawerHeader>
              <nav>
                <List>
                  <ListItem>{socialBar}</ListItem>
                </List>
              </nav>
              <Divider />
              <nav>
                <List>
                  {pages.map((page) => (
                    <ListItem key={page.name} disablePadding>
                      <ListItemButton
                        component="a"
                        href={page.url}
                        onClick={handleCloseNavMenu}
                      >
                        <ListItemText
                          primary={page.name}
                          primaryTypographyProps={{ variant: "button" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </nav>
            </Drawer>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{
                  my: 2,
                  color: neutral["50"],
                  display: "block",
                }}
                component={OutboundLink}
                href={page.url}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
export default Navbar
