import * as React from "react"
import { Box, Typography, styled } from "@mui/material"
import { TimelineBlockType } from "../types/pagetypes"

const Circle = styled("div")(({ theme }) => ({
  height: "2rem",
  width: "2rem",
  backgroundColor: theme.palette.colors.heliotrope,
  padding: 8,
  borderRadius: "100%",
  position: "absolute",
  left: "20%",
  marginLeft: "-1.0rem",
}))

const TimelineBlock = ({
  startDate,
  endDate,
  role,
  company,
  bullets,
}: TimelineBlockType) => {
  return (
    <Box position="relative">
      <Circle />
      <Box pr={4} pt={0.5} sx={{ width: "20%" }}>
        <Typography variant="body2" align="right" sx={{ fontFamily: "Inconsolata" }}>
          {startDate} - {endDate}
        </Typography>
      </Box>
      <Box pl={5} pb={2} sx={{ marginLeft: "20%", marginTop: -2.6 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          {role} @ {company}
        </Typography>
        <ul>
          {bullets.map((bullet, i) => {
            return <li key={i}>{bullet}</li>
          })}
        </ul>
      </Box>
    </Box>
  )
}

export default TimelineBlock
