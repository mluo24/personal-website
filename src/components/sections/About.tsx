import * as React from "react"
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Link,
  styled,
  Toolbar,
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ExploreIcon from "@mui/icons-material/Explore"
import SchoolIcon from "@mui/icons-material/School"
import Tag from "../Tag"
import WrapStack from "../WrapStack"
import { StaticImage } from "gatsby-plugin-image"
import { IconInfoType } from "../../types/pagetypes"

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

const sideInfo: IconInfoType[] = [
  {
    icon: <SchoolIcon />,
    content: "Cornell University '24",
  },
  {
    icon: <LocationOnIcon />,
    content: "NYC Metropolitan Area",
  },
  {
    icon: <ExploreIcon />,
    content: "Running, Hiking, Art, Clarinet, Piano, Video Games",
  },
]

const ImageWrapper = styled(Box)(({ theme }) => ({
  ".selfimg": {
    borderRadius: "100%",
    [theme.breakpoints.up("xs")]: {
      width: 90,
      height: 90,
    },
    [theme.breakpoints.up("sm")]: {
      width: 160,
      height: 160,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      maxHeight: 0,
      paddingBottom: "100%",
    },
  },
  ".selfimg div": {
    borderRadius: "100%",
  },
  ".selfimg img": {
    borderRadius: "100%",
  },
}))

const IconInfo = ({ icon, content }: IconInfoType) => {
  return (
    <Box display="flex" mt={1} sx={{ columnGap: 1 }}>
      {icon}
      <Typography variant="body2" sx={{ alignSelf: "center" }}>
        {content}
      </Typography>
    </Box>
  )
}

const About = () => {
  return (
    <Box position="relative" id="about">
      <Toolbar sx={{ display: { xs: "block", sm: "none" } }} />
      {/* kind of hacky solution for centering lol */}
      <Box
        display="flex"
        alignItems="center"
        sx={{ pt: { xs: 0, md: 5 }, minHeight: "100vh" }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }}>
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
                Cornell Design &amp; Tech Initiative
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
          <Grid
            item
            md
            display={{ xs: "flex", md: "block" }}
            alignItems="center"
            sx={{ columnGap: { xs: 0, sm: 4 } }}
          >
            <ImageWrapper>
              <StaticImage
                className="selfimg"
                alt="A picture of me!"
                src="../../images/miranda.jpg"
              />
            </ImageWrapper>
            <Box>
              {sideInfo.map((e, i) => {
                return <IconInfo {...e} key={i} />
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        position="absolute"
        display={{ xs: "none", lg: "initial" }}
        sx={{ bottom: "4%", left: "50%", transform: "translate(-50%, 0)" }}
      >
        <IconButton color="primary" href="#experience">
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default About
