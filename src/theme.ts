import { red } from "@mui/material/colors"
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
      main: "#E0FBFC",
      dark: "#97d1f2",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
})

const bodyFont = ['"Open Sans"', '"Helvetica Neue"', "Arial", "sans-serif"].join(",")

const theme = createTheme(colors, {
  typography: {
    fontFamily: ['"Open Sans"', '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    color: colors.palette.colors.isabelline,
    h1: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
      color: colors.palette.colors.heliotrope,
    },
    h2: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
      color: colors.palette.colors.heliotrope,
    },
    h3: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
      color: colors.palette.colors.heliotrope,
    },
    h4: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
      color: colors.palette.colors.heliotrope,
    },
    h5: {
      fontFamily: "Montserrat, Verdana",
      fontWeight: 600,
      color: colors.palette.colors.heliotrope,
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
          background: ${colors.palette.colors.main};
          color: ${colors.palette.colors.isabelline};
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
      styleOverrides: {
        outlined: {
          borderRadius: 8,
        },
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
