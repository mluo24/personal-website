import React from "react"
import { Box, Container, Link, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        pb: 8,
        pt: 4,
        px: 2,
        mt: "auto",
      }}
    >
      <Container>
        <Typography align="center">
          Made with ❤ by{" "}
          <Link href="https://github.com/mluo24/personal-website" target="_blank">
            Miranda Luo
          </Link>
          . Site made with{" "}
          <Link href="https://mui.com/" target="_blank">
            MUI
          </Link>{" "}
          and{" "}
          <Link href="https://www.gatsbyjs.com/" target="_blank">
            Gatsby
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
