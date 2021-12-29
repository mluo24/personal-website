import * as React from "react"
import { Grid, Box, Typography, Link } from "@mui/material"
import { Link as GatsbyLink } from "gatsby"

const About = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container spacing={1}>
        <Grid item xs>
          Hello there
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm Miranda!
          </Typography>
          <Typography variant="body1">
            This is some body text.{" "}
            <Link component={GatsbyLink} to="/about" underline="hover">
              Go to the about page
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default About
