import * as React from "react"
import { styled } from "@mui/material"
import { MultipleChildrenTypes } from "../types/pagetypes"

// flexbox vertical spacing trick derived from:
// https://coryrylan.com/blog/css-gap-space-with-flexbox
const TempStack = styled("div")(({ theme }) => ({
  "--gap": theme.spacing(1),
  display: "inline-flex",
  flexWrap: "wrap",
  margin: "calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap))",
  width: "calc(100% + var (--gap))",
  "& > *": {
    margin: "var(--gap) 0 0 var(--gap)",
  },
}))

const WrapStack = ({ children }: MultipleChildrenTypes) => {
  return <TempStack>{children}</TempStack>
}

export default WrapStack
