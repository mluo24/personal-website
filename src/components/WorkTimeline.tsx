import * as React from "react"
import { Box } from "@mui/material"
import TimelineBlock from "./TimelineBlock"
import { TimelineType } from "../types/pagetypes"

const WorkTimeline = ({ jobs }: TimelineType) => {
  return (
    <Box
      position="relative"
      sx={{
        "::before": {
          content: "''",
          display: "block",
          width: "1px",
          height: "100%",
          background: "#4A4E69",
          position: "absolute",
          left: "20%",
          top: 0,
        },
      }}
    >
      {jobs.map((job, i) => {
        return <TimelineBlock key={i} {...job} />
      })}
    </Box>
  )
}

export default WorkTimeline