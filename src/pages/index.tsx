import * as React from "react"
import Container from "@mui/material/Container"
import Layout from "../components/Layout"
import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

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
