import React from "react"
import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import { ChildrenPageTypes } from "../types/pagetypes"
import { MDXProvider } from "@mdx-js/react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link, Typography } from "@mui/material"

// enabling smooth scroll
// https://github.com/gatsbyjs/gatsby/issues/3318
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const shortcodes = { Typography, Link }

const Layout = ({ children }: ChildrenPageTypes) => {
  return (
    <Box>
      <MDXProvider components={shortcodes}>
        <Navbar />
        <Box>{children}</Box>
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
      </MDXProvider>
    </Box>
  )
}

export default Layout
