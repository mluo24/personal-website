import { Grid } from "@mui/material"
import * as React from "react"
import { ProjectGridType } from "../types/pagetypes"
import ProjectCard from "./ProjectCard"

const ProjectsGrid = ({ projects }: ProjectGridType) => {
  return (
    <Grid
      container
      px={2}
      spacing={{ xs: 4, md: 5 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {projects.map((projects) => {
        return (
          <Grid key={projects.title} item xs={4} sm={4} md={4}>
            <ProjectCard key={projects.title} {...projects} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProjectsGrid