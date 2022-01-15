import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"
import neutral from "./themeColors"

// dark theme
const colors = createTheme({
  palette: {
    primary: {
      main: "#B8D0FF",
    },
    secondary: {
      main: "#FF8AB4",
    },
    error: {
      main: red["A400"],
    },
    text: {
      primary: neutral["200"],
      secondary: neutral["200"],
    },
    background: {
      paper: neutral["800"],
      default: neutral["900"],
    },
  },
})

const bodyFont = ["'Open Sans'", "'Helvetica Neue'", "Arial", "sans-serif"].join(",")
const headingFont = "Montserrat, Verdana, sans-serif"
const subFont = "Inconsolata, 'Courier New', monospace"

// top level fontFamily still does not work
const theme = createTheme(colors, {
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: headingFont,
      fontWeight: 600,
    },
    h2: {
      fontFamily: headingFont,
      fontWeight: 600,
    },
    h3: {
      fontFamily: headingFont,
      fontWeight: 600,
    },
    h4: {
      fontFamily: headingFont,
      fontWeight: 600,
    },
    h5: {
      fontFamily: subFont,
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: subFont,
    },
    body1: {
      fontFamily: bodyFont,
    },
    body2: {
      fontFamily: bodyFont,
    },
    button: {
      fontFamily: headingFont,
      fontWeight: 600,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        outlined: {
          borderRadius: 8,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
  },
})

export default theme
