import * as React from "react"

import { Box, Typography, Toolbar } from "@mui/material"
import WorkTimeline from "./WorkTimeline"
import { graphql, useStaticQuery } from "gatsby"
import neutral from "../themeColors"

const Experience = () => {
  const data = useStaticQuery(graphql`
    query JobsQuery {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/(jobs)/" } }
        sort: { fields: frontmatter___endDate, order: DESC }
      ) {
        nodes {
          id
          body
          frontmatter {
            endDate(formatString: "MMM YYYY")
            startDate(formatString: "MMM YYYY")
            isCurrent
            role
            title
          }
        }
      }
    }
  `)

  return (
    <Box pt={6} id="experience">
      <Toolbar />
      <Typography
        variant="h3"
        component="h2"
        sx={{ color: neutral["50"] }}
        gutterBottom
      >
        Work Experience
      </Typography>
      <Box m={4}>
        <WorkTimeline jobs={data.allMdx.nodes} />
      </Box>
    </Box>
  )
}

export default Experience
