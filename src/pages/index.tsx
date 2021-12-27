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
        <Link component={GatsbyLink} to="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  )
}

export default IndexPage
