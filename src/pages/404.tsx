import React from "react"
import { createStyles, Text, Container, Group } from "@mantine/core"
import Button from "@mui/material/Button"
import { Link } from "gatsby"

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    fontFamily: "Open Sans",
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}))

const NotFoundPage = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        This page was not found. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group position="center">
        <Button variant="outlined" size="large" component={Link} to="/">
          Go home
        </Button>
      </Group>
    </Container>
  )
}

export default NotFoundPage
