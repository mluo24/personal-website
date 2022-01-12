import { Chip, ChipProps } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import { styled } from "@mui/system"

const Tag = styled(Chip)<ChipProps>(({ theme }) => ({
  padding: "0 0.25rem",
  fontFamily: "Inconsolata, monospace",
  // color: theme.palette.colors.isabelline,
  "&.MuiChip-sizeMedium": {
    backgroundColor: theme.palette.background.paper,
    // color: theme.palette.colors.isabelline,
    height: 28,
    fontSize: 18,
  },
  "&.MuiChip-sizeSmall": {
    backgroundColor: theme.palette.secondary.main,
    color: blueGrey["50"],
    height: 22,
    fontSize: 14,
  },
}))

export default Tag
