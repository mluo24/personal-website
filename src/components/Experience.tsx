import * as React from "react"

import { Box, Typography, Toolbar } from "@mui/material"
import WorkTimeline from "./WorkTimeline"
import { graphql, useStaticQuery } from "gatsby"

const Experience = () => {
  const data = useStaticQuery(graphql`
    query JobsQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(jobs)/" } }) {
        nodes {
          html
          frontmatter {
            endDate(formatString: "MMM YYYY")
            startDate(formatString: "MMM YYYY")
            isCurrent
            role
            title
          }
          id
        }
      }
    }
  `)

  return (
    <Box pt={6} id="experience">
      <Toolbar />
      <Typography variant="h3" component="h2" gutterBottom>
        Work Experience
      </Typography>
      <Box m={6}>
        <WorkTimeline jobs={data.allMarkdownRemark.nodes} />
      </Box>
    </Box>
  )
}

export default Experience
