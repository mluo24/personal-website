import * as React from "react"
import { Box, Typography, styled } from "@mui/material"
import { TimelineBlockType } from "../types/pagetypes"
import { MDXRenderer } from "gatsby-plugin-mdx"
import neutral from "../themeColors"

const Circle = styled("div")(({ theme }) => ({
  height: "1.2rem",
  width: "1.2rem",
  backgroundColor: theme.palette.primary.main,
  padding: 8,
  borderRadius: "100%",
  position: "absolute",
  left: "20%",
  marginLeft: "-0.6rem",
}))

const TimelineBlock = ({ frontmatter, body }: TimelineBlockType) => {
  const { startDate, endDate, role, isCurrent, title } = frontmatter

  return (
    <Box position="relative">
      <Circle />
      <Box pr={4} sx={{ width: "20%" }}>
        <Typography variant="subtitle1" align="right" sx={{ color: neutral["100"] }}>
          {startDate} - {isCurrent ? "Present" : endDate}
        </Typography>
      </Box>
      <Box pl={5} pb={1} sx={{ marginLeft: "20%", marginTop: -3.5 }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{ color: neutral["100"] }}
          gutterBottom
        >
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
