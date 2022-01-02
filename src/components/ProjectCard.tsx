import * as React from "react"

import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Stack,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import { ProjectCardType } from "../types/pagetypes"
import Tag from "./Tag"

const ProjectCard = ({ frontmatter, html }: ProjectCardType) => {
  const { title, year, technologies, githubLink } = frontmatter

  return (
    <Card
      elevation={4}
      sx={{
        px: 0.5,
        bgcolor: "colors.spaceCadet",
        color: "colors.isabelline",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Box component="header" display="flex">
          <Typography variant="h5" component="h4" gutterBottom>
            {title}
          </Typography>
          <Box flexGrow={1} />
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ fontFamily: "Inconsolata" }}
          >
            {year}
          </Typography>
        </Box>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </CardContent>
      <CardActions sx={{ mx: 1, mb: 1 }}>
        <Stack
          direction="row"
          spacing={0.5}
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          {technologies.map((tool) => (
            <Tag key={tool} label={tool} size="small" />
          ))}
        </Stack>
        <Box flexGrow={1} />
        <Box>
          <IconButton
            href={githubLink}
            target="_blank"
            color="primary"
            aria-label="github"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  )
}

export default ProjectCard
