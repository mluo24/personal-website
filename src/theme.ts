import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

const fonts = {
  fontFamily: "Open Sans, Arial",
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

const colors = {
  primary: {
    main: "#E0FBFC",
  },
  secondary: {
    main: "#19857b",
  },
  error: {
    main: red.A400,
  },
}

const theme = createTheme({
  typography: fonts,
  palette: colors,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background: #22223B;
          color: #F2E9E4
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
