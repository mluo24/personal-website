import React from "react"
import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import { ChildrenPageTypes } from "../types/pagetypes"
import { MDXProvider } from "@mdx-js/react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link as MUILink, Typography } from "@mui/material"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { LinkProps } from "@mui/material/Link/Link"

// enabling smooth scroll
// https://github.com/gatsbyjs/gatsby/issues/3318
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Link = (props: LinkProps) => {
  return (
    <MUILink component={OutboundLink} href={props.href} target={props.target}>
      {props.children}
    </MUILink>
  )
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
