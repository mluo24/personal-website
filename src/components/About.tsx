import * as React from "react"
import { Grid, Box, Typography, IconButton, Link } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ExploreIcon from "@mui/icons-material/Explore"
import SchoolIcon from "@mui/icons-material/School"
import Tag from "./Tag"
import WrapStack from "./WrapStack"
import { StaticImage } from "gatsby-plugin-image"

const skills: string[] = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "OCaml",
  "PHP",
  "C++",
  "R",
  "SQL",
  "Django",
  "React",
  "Flask",
  "Rails",
  "Node.js",
  "Express",
  "MUI",
  "Laravel",
  "HTML/CSS",
  "Git",
  "REST",
  "scikit-learn",
  "d3",
]

const About = () => {
  return (
    <Box position="relative" id="about" mt={-5}>
      {/* kind of hacky solution for centering lol */}
      <Box display="flex" alignItems="center" sx={{ minHeight: "100vh" }}>
        <Grid container spacing={8} direction={{ md: "row-reverse" }}>
          <Grid item md={8}>
            <Typography variant="h2" component="h1" color="primary" gutterBottom>
              &#128075; Hi, I'm Miranda!
            </Typography>
            <Typography variant="body1" mb={2}>
              I am a sophomore at Cornell University majoring in computer science and
              biological sciences. Some of my interests include full-stack
              development and the intersections between computer science, medicine,
              and biology. I aspire to be a software engineer when I graduate and
              will also be pursuing higher education computational biology in the
              future.
            </Typography>
            <Typography variant="body1" mb={2}>
              Currently, I am involved as a full-stack developer for{" "}
              <Link href="https://www.cornelldti.org/" target="_blank">
                Cornell Design &amp; Tech Initative
              </Link>{" "}
              and a consultant for CS 3110: Data Structures and Functional
              Programming.
            </Typography>
            <Typography variant="body1" mb={2}>
              These are some of my skills and languages/technologies I am familiar
              with:
            </Typography>
            <WrapStack>
              {skills.map((skill) => (
                <Tag label={skill} key={skill} />
              ))}
            </WrapStack>
          </Grid>
          <Grid item md>
            <StaticImage
              style={{ maxHeight: 0, paddingBottom: "100%", borderRadius: "100%" }}
              alt="A photo of me!"
              src="../images/miranda.jpg"
            />
            {/* make these into components plz?? */}
            <Box display="flex" mt={2} sx={{ columnGap: 1 }}>
              <SchoolIcon />
              <Typography variant="body2" sx={{ alignSelf: "center" }}>
                Cornell University '24
              </Typography>
            </Box>
            <Box display="flex" mt={1} sx={{ columnGap: 1 }}>
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
        </Grid>
      </Box>
      <Box
        position="absolute"
        sx={{ bottom: "5%", left: "50%", transform: "translate(-50%, 0)" }}
      >
        <Typography align="center">
          <IconButton color="primary" href="#experience">
            <KeyboardArrowDownIcon />
          </IconButton>
        </Typography>
      </Box>
    </Box>
  )
}

export default About
