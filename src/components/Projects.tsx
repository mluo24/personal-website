import * as React from "react"
import { Box, Typography, Toolbar } from "@mui/material"
import { useStaticQuery, graphql } from "gatsby"
import ProjectsGrid from "./ProjectsGrid"
import neutral from "../themeColors"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/(projects)/" }, frontmatter: {} }
        sort: { fields: frontmatter___year, order: DESC }
      ) {
        nodes {
          body
          id
          frontmatter {
            githubLink
            year(formatString: "YYYY")
            link
            technologies
            title
          }
        }
      }
    }
  `)

  return (
    <Box my={2} pt={6} id="projects">
      <Toolbar />
      <Typography
        variant="h3"
        component="h2"
        sx={{ color: neutral["50"] }}
        gutterBottom
      >
        Projects
      </Typography>
      <ProjectsGrid projects={data.allMdx.nodes} />
    </Box>
  )
}

export default Projects
