import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"
import neutral from "./themeColors"

declare module "@mui/material/styles" {
  interface Palette {
    colors: Palette["primary"]
  }

  interface PaletteOptions {
    colors: PaletteOptions["primary"]
  }

  interface PaletteColor {
    darkest?: string
    spaceCadet?: string
    independence?: string
    oldLavender?: string
    heliotrope?: string
    blackShadows?: string
    isabelline?: string
  }

  interface SimplePaletteColorOptions {
    darkest?: string
    spaceCadet?: string
    independence?: string
    oldLavender?: string
    heliotrope?: string
    blackShadows?: string
    isabelline?: string
  }
}

// dark theme
const colors = createTheme({
  palette: {
    colors: {
      main: "#22223B",
      darkest: "#22223B",
      spaceCadet: "#363852",
      independence: "#4A4E69",
      oldLavender: "#726D81",
      heliotrope: "#9A8C98",
      blackShadows: "#C6BBBE",
      isabelline: "#F2E9E4",
    },
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

const bodyFont = ['"Open Sans"', '"Helvetica Neue"', "Arial", "sans-serif"].join(",")
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
    MuiCssBaseline: {
      styleOverrides: `
        ul li {
          margin-bottom: 0.5rem;
        }
      `,
    },
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
