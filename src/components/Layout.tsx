import React from "react"
import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import { ChildrenPageTypes } from "../types/pagetypes"
import Navbar from "./Navbar"
import Footer from "./Footer"

// enabling smooth scroll
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }: ChildrenPageTypes) => {
  return (
    <Box>
      <Navbar />
      <Box p={6}>{children}</Box>
      <Footer />
      <Fab
        size="small"
        color="primary"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "fixed",
          bottom: 30,
          right: 30,
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Box>
  )
}

export default Layout
