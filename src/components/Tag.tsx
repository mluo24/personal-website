import { Chip, ChipProps } from "@mui/material"
import { styled } from "@mui/system"
import neutral from "../themeColors"

const Tag = styled(Chip)<ChipProps>(({ theme }) => ({
  padding: theme.spacing(1, 0.5),
  fontFamily: "Inconsolata, monospace",
  "&.MuiChip-sizeMedium": {
    backgroundColor: theme.palette.background.paper,
    height: 28,
    fontSize: 17,
  },
  "&.MuiChip-sizeSmall": {
    backgroundColor: neutral["600"],
    color: neutral["100"],
    height: 22,
    fontSize: 13,
  },
}))

export default Tag
