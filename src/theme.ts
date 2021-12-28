import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

const fonts = {
  fontFamily: [
    "Open Sans",
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  color: "",
  h1: {
    fontFamily: "Montserrat, Verdana",
    fontWeight: 600,
    color: "#9A8C98",
  },
  h2: {
    fontFamily: "Montserrat, Verdana",
    fontWeight: 600,
    color: "#9A8C98",
  },
  h3: {
    fontFamily: "Montserrat, Verdana",
    fontWeight: 600,
    color: "#9A8C98",
  },
  h4: {
    fontFamily: "Montserrat, Verdana",
    fontWeight: 600,
    color: "#9A8C98",
  },
}

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

const theme = createTheme(colors, {
  typography: {
    fontFamily: [
      "Open Sans",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background: ${colors.palette.colors.main};
          color: ${colors.palette.colors.isabelline};
        }
      `,
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})

export default theme
