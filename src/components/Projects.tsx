import * as React from "react"
import { Box, Typography, Toolbar } from "@mui/material"
import ProjectsGrid from "./ProjectsGrid"
import { ProjectCardType } from "../types/pagetypes"

const projects: ProjectCardType[] = [
  {
    title: "Project 1",
    year: 2022,
    tools: ["Java", "C++"],
    githubLink: "https://github.com",
    children: (
      <>
        This is a description of the project. I will include a few sentences here
        that describe it well as well as a few cool technologies that I would like to
        describe them with, as long as they fit lol.
      </>
    ),
  },
  {
    title: "Project 2",
    year: 2022,
    tools: ["Java", "C++", "Spring", "Python", "React"],
    githubLink: "https://github.com",
    children: <>Hello there</>,
  },
  {
    title: "Project 3",
    year: 2022,
    tools: ["Java", "C++"],
    githubLink: "https://github.com",
    children: <>Hello there</>,
  },
  {
    title: "Project 4",
    year: 2022,
    tools: ["Java", "C++"],
    githubLink: "https://github.com",
    children: <>Project on new line!</>,
  },
]

const Projects = () => {
  return (
    <Box my={2} pt={6} id="projects">
      <Toolbar />
      <Typography variant="h3" component="h2" gutterBottom>
        Projects
      </Typography>
      <ProjectsGrid projects={projects} />
    </Box>
  )
}

export default Projects
