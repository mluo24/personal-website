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
          bgcolor: "background.paper",
          position: "absolute",
          left: "20%",
          top: 0,
        },
      }}
    >
      {jobs.map((job) => {
        return <TimelineBlock key={job.id} {...job} />
      })}
    </Box>
  )
}

export default WorkTimeline
