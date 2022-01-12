import { blueGrey, red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

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
      main: "#5F80FB",
    },
    secondary: {
      main: "#738cba",
    },
    error: {
      main: red["A400"],
    },
    text: {
      primary: blueGrey["200"],
      secondary: blueGrey["200"],
    },
    background: {
      paper: "#1e2745",
      default: "#141a32",
    },
  },
})

const bodyFont = ['"Open Sans"', '"Helvetica Neue"', "Arial", "sans-serif"].join(",")

const theme = createTheme(colors, {
  typography: {
    fontFamily: ['"Open Sans"', '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    h1: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
    },
    button: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          font-family: ${bodyFont};
        }
      `,
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: bodyFont,
      },
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
