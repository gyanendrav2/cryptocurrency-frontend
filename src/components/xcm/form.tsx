import { Box, Element, Grid } from "@react-cssx/core"
import React from "react"
import { Button } from "../../ui/Button"
import { formStyle } from "./cssxStyle/form"

export default function Form() {
  const classes = formStyle
  return (
    <Box cssx={classes.wrapper}>
      <Grid cols={12} columns={{ _: 2 }} columnGap={16}>
        <Box cssx={classes.card}>
          <Element as="p">BUY</Element>
          <Element as="p">0.212</Element>
        </Box>
      </Grid>
      <Button variant="yellow" cssx={classes.button}>
        buy now
      </Button>
    </Box>
  )
}
