import * as React from "react"
import { Box, Typography, styled } from "@mui/material"
import { TimelineBlockType } from "../types/pagetypes"
import { MDXRenderer } from "gatsby-plugin-mdx"
import neutral from "../themeColors"

const TimelineBlock = ({ frontmatter, body, margin }: TimelineBlockType) => {
  const { startDate, endDate, role, isCurrent, title } = frontmatter

  const Circle = styled("div")(({ theme }) => ({
    height: "1.2rem",
    width: "1.2rem",
    backgroundColor: theme.palette.primary.main,
    padding: 8,
    borderRadius: "100%",
    position: "absolute",
    [theme.breakpoints.up("md")]: {
      left: margin,
    },
    marginLeft: "-0.6rem",
  }))

  return (
    <Box position="relative" mb={1}>
      <Circle />
      <Box
        pr={4}
        pl={{ xs: 5, md: 0 }}
        sx={{
          width: { md: margin },
          float: { md: "left" },
          marginTop: { md: -0.5 },
          textAlign: { md: "right" },
        }}
      >
        <Typography variant="subtitle1" sx={{ color: neutral["100"] }}>
          {startDate} - {isCurrent ? "Present" : endDate}
        </Typography>
      </Box>
      <Box pl={5} pb={0.5} sx={{ marginLeft: { md: margin } }}>
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
