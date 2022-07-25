import * as React from "react"
import Layout from "../components/Layout"
import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"
import { Container } from "@mantine/core"

const IndexPage = () => {
  return (
    <Layout>
      <Container size="lg">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Container>
    </Layout>
  )
}

export default IndexPage
