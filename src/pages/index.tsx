import * as React from "react"
import { Container, Typography, Link } from "@mui/material"
import { Link as GatsbyLink } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Hi, I'm Miranda!
        </Typography>
        <Typography variant="body1">
          This is some body text.{" "}
          <Link component={GatsbyLink} to="/about" underline="hover">
            Go to the about page
          </Link>
        </Typography>
      </Container>
    </Layout>
  )
}

export default IndexPage
