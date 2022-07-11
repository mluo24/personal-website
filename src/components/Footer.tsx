import React from "react"
import { Box, Container, Divider, Link, Typography } from "@mui/material"
import neutral from "../themeColors"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        pb: 6,
        mt: "auto",
        color: neutral["400"],
      }}
    >
      <Divider />
      <Container
        sx={{
          pt: 4,
        }}
      >
        <Typography align="center">
          Made with ❤ by{" "}
          <Link
            component={OutboundLink}
            href="https://github.com/mluo24/personal-website"
            target="_blank"
          >
            Miranda Luo
          </Link>
          . Site made with{" "}
          <Link component={OutboundLink} href="https://mui.com/" target="_blank">
            MUI
          </Link>{" "}
          and{" "}
          <Link
            component={OutboundLink}
            href="https://www.gatsbyjs.com/"
            target="_blank"
          >
            Gatsby
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
