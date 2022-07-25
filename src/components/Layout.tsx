import React from "react"
import { ChildrenPageTypes } from "../types/pagetypes"
import { MDXProvider } from "@mdx-js/react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link as MUILink, Typography } from "@mui/material"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { LinkProps } from "@mui/material/Link/Link"
import { useWindowScroll } from "@mantine/hooks"
import { ActionIcon, Affix, Box, MediaQuery, Transition } from "@mantine/core"
import { ArrowNarrowUp } from "tabler-icons-react"

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
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Box>
      <MDXProvider components={shortcodes}>
        <Navbar />
        <Box>{children}</Box>
        <Footer />
        <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
          <Affix position={{ bottom: 30, right: 30 }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
              {(transitionStyles) => (
                <ActionIcon
                  radius={50}
                  size={50}
                  variant="filled"
                  style={transitionStyles}
                  onClick={() => scrollTo({ y: 0 })}
                >
                  <ArrowNarrowUp size={30} />
                </ActionIcon>
              )}
            </Transition>
          </Affix>
        </MediaQuery>
      </MDXProvider>
    </Box>
  )
}

export default Layout
