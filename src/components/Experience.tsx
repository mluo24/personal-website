import * as React from "react"

import { Box, Typography } from "@mui/material"
import WorkTimeline from "./WorkTimeline"
import { TimelineBlockType } from "../types/pagetypes"

const jobs: TimelineBlockType[] = [
  {
    startDate: "Aug 2021",
    endDate: "Current",
    role: "Software Engineering Intern",
    company: "Facebook",
    bullets: [
      "Implemented a lot of really cool things here, putting more stuff so that it goes to the next line",
      "also did a lot of cool things here",
    ],
  },
  {
    startDate: "Mar 2021",
    endDate: "May 2021",
    role: "Software Engineering Intern",
    company: "Workstream",
    bullets: ["Did a lot of cool things", "also did a lot of cool things here"],
  },
]

const Experience = () => {
  return (
    <Box>
      <Typography variant="h3" component="h2" gutterBottom>
        Work Experience
      </Typography>
      <Box m={6}>
        <WorkTimeline jobs={jobs} />
      </Box>
      <p>
        Platea dictumst vestibulum rhoncus est. In tellus integer feugiat scelerisque
        varius morbi enim. Sagittis aliquam malesuada bibendum arcu vitae. Mi
        bibendum neque egestas congue quisque egestas diam in. Sit amet dictum sit
        amet justo donec enim diam. Tempor commodo ullamcorper a lacus vestibulum sed
        arcu non odio. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus
        in mollis nunc sed id semper risus. In cursus turpis massa tincidunt dui.
        Arcu ac tortor dignissim convallis aenean et tortor at. Accumsan in nisl nisi
        scelerisque. Enim eu turpis egestas pretium aenean pharetra. Mauris in
        aliquam sem fringilla ut morbi tincidunt. Nullam ac tortor vitae purus. Id
        aliquet risus feugiat in ante metus.
      </p>
    </Box>
  )
}

export default Experience
