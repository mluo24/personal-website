import { Chip, ChipProps } from "@mui/material"
import { styled } from "@mui/system"

const Tag = styled(Chip)<ChipProps>(({ theme }) => ({
  padding: "0 0.25rem",
  fontFamily: "Inconsolata, monospace",
  color: theme.palette.colors.isabelline,
  "&.MuiChip-sizeMedium": {
    backgroundColor: theme.palette.colors.independence,
    color: theme.palette.colors.isabelline,
    height: 28,
    fontSize: 18,
  },
  "&.MuiChip-sizeSmall": {
    backgroundColor: theme.palette.colors.oldLavender,
    fontSize: 16,
  },
}))

export default Tag
