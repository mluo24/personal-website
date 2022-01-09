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
import LinkIcon from "@mui/icons-material/Link"
import { ProjectCardType } from "../types/pagetypes"
import Tag from "./Tag"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ProjectCard = ({ frontmatter, body }: ProjectCardType) => {
  const { title, year, technologies, githubLink, link } = frontmatter

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
        <Box>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
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
        <Box display="flex">
          {link && (
            <IconButton
              href={link}
              target="_blank"
              color="primary"
              aria-label="link"
              size="small"
            >
              <LinkIcon />
            </IconButton>
          )}
          <IconButton
            href={githubLink}
            target="_blank"
            color="primary"
            aria-label="github"
            size="small"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  )
}

export default ProjectCard
