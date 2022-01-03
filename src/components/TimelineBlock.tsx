import * as React from "react"
import { Box, Typography, styled } from "@mui/material"
import { TimelineBlockType } from "../types/pagetypes"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Circle = styled("div")(({ theme }) => ({
  height: "2rem",
  width: "2rem",
  backgroundColor: theme.palette.colors.heliotrope,
  padding: 8,
  borderRadius: "100%",
  position: "absolute",
  left: "20%",
  marginLeft: "-1rem",
}))

const TimelineBlock = ({ frontmatter, body }: TimelineBlockType) => {
  const { startDate, endDate, role, isCurrent, title } = frontmatter

  return (
    <Box position="relative">
      <Circle />
      <Box pr={4} sx={{ width: "20%" }}>
        <Typography
          variant="subtitle1"
          align="right"
          sx={{ fontFamily: "Inconsolata" }}
        >
          {startDate} - {isCurrent ? "Present" : endDate}
        </Typography>
      </Box>
      <Box pl={5} pb={1} sx={{ marginLeft: "20%", marginTop: -3.5 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          {role} @ {title}
        </Typography>
        <Box>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
      </Box>
    </Box>
  )
}

export default TimelineBlock
