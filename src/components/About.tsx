import * as React from "react"
import { Grid, Box, Typography, Link, Skeleton } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ExploreIcon from "@mui/icons-material/Explore"
import { Link as GatsbyLink } from "gatsby"
import Tag from "./Tag"

const About = () => {
  return (
    <Box pt={2} sx={{ minHeight: "100vh" }}>
      <Grid container spacing={8}>
        <Grid item md>
          <Skeleton
            variant="circular"
            sx={{ paddingBottom: "100%" }}
            animation={false}
          />
          <Box display="flex" mt={2} sx={{ columnGap: 1 }}>
            <LocationOnIcon />
            <Typography variant="body2" sx={{ alignSelf: "center" }}>
              NYC Metropolitan Area
            </Typography>
          </Box>
          <Box display="flex" mt={1} sx={{ columnGap: 1 }}>
            <ExploreIcon />
            <Typography variant="body2" sx={{ alignSelf: "center" }}>
              Running, Hiking, Art, Clarinet, Piano, Video Games
            </Typography>
          </Box>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm Miranda!
          </Typography>
          <Typography variant="body1">
            This is some body text.{" "}
            <Link component={GatsbyLink} to="/about" underline="hover">
              Go to the about page
            </Link>
          </Typography>
          <Tag label="Java" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default About
