import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Container from "@mui/material/Container"
import { Toolbar, Typography } from "@mui/material"
import Button from "@mui/material/Button"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <Toolbar />
        <Typography variant="h1" align="center" mt={10} mb={5}>
          404: Not Found
        </Typography>
        <Typography align="center" mb={10}>
          <Button variant="outlined" size="large" component={Link} to="/">
            Go to Index
          </Button>
        </Typography>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
