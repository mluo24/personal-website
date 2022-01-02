import * as React from "react"
import { Box, Link, Toolbar, Typography } from "@mui/material"

const Contact = () => {
  return (
    <Box py={10} id="contact">
      <Toolbar />
      <Typography variant="h3" component="h2" gutterBottom>
        Contact Me!
      </Typography>
      <Box mx={20} mt={10}>
        <Typography
          variant="h4"
          color="colors.blackShadows"
          align="center"
          gutterBottom
        >
          Want to get in touch?
        </Typography>
        <Typography sx={{ mb: 5 }}>
          Take a look at the top left for more of my work, socials, and ways to
          contact me! I have also reiterated them below for reference:
        </Typography>
        <Typography align="center">
          <strong>Email</strong>:{" "}
          <Link href="mailto:mml267@cornell.edu" target="_blank">
            mml267@cornell.edu
          </Link>
        </Typography>
        <Typography align="center">
          <strong>LinkedIn</strong>:{" "}
          <Link href="https://www.linkedin.com/in/miranda-luo" target="_blank">
            linkedin.com/in/miranda-luo
          </Link>
        </Typography>
        <Typography align="center">
          <strong>GitHub</strong>:{" "}
          <Link href="https://github.com/mluo24" target="_blank">
            github.com/mluo24
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}
export default Contact
