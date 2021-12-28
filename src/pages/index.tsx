import * as React from "react"
import { Box, Container, Typography, Link } from "@mui/material"
import { Link as GatsbyLink } from "gatsby"

const IndexPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Hi, I'm Miranda!
        </Typography>
        <Typography variant="body1">
          This is some body text.{" "}
          <Link component={GatsbyLink} to="/about" underline="hover">
            Go to the about page
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default IndexPage
