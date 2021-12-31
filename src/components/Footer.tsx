import React from "react"
import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        pb: 8,
        pt: 4,
        px: 2,
        mt: "auto",
      }}
    >
      <Typography align="center">
        Made with ❤ by Miranda Luo. Site made with MUI
      </Typography>
    </Box>
  )
}

export default Footer
