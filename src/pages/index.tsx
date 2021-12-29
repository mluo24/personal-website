import * as React from "react"
import { Container } from "@mui/material"
import Layout from "../components/Layout"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Container>
    </Layout>
  )
}

export default IndexPage
