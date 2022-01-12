import { Chip, ChipProps } from "@mui/material"
import { styled } from "@mui/system"
import neutral from "../themeColors"

const Tag = styled(Chip)<ChipProps>(({ theme }) => ({
  padding: "0 0.25rem",
  fontFamily: "Inconsolata, monospace",
  "&.MuiChip-sizeMedium": {
    backgroundColor: theme.palette.background.paper,
    height: 28,
    fontSize: 18,
  },
  "&.MuiChip-sizeSmall": {
    backgroundColor: neutral["600"],
    color: neutral["100"],
    height: 22,
    fontSize: 14,
  },
}))

export default Tag
