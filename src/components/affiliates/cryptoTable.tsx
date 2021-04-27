import { Box, Element } from "@react-cssx/core"
import React from "react"
import { CommissionStyle } from "./cssxStyle/commissionStyle"

export default function CryptoTable() {
  const classes = CommissionStyle
  return (
    <Box cssx={classes.tableWrapper}>
      <Element as="table" cssx={classes.table}>
        <tbody>
          <tr>
            <th>&nbsp;</th>
            <th>
              <Element as="img" cssx={{ m: "auto" }} src="affiliates/coinmetroLogo.png" />
            </th>
            <th>
              <Element as="img" cssx={{ m: "auto" }} src="affiliates/BinanceLogo.png" />
            </th>
            <th>
              <Element as="img" cssx={{ m: "auto" }} src="affiliates/krakenLogo.png" />
            </th>
            <th>
              <Element as="img" cssx={{ m: "auto" }} src="affiliates/CoinbaseLogo.png" />
            </th>
          </tr>
          <tr>
            <td>Commission rate</td>
            <td>40%</td>
            <td>20%-50%</td>
            <td>20%</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>Sub-affiliate commission</td>
            <td>10%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
          </tr>
          <tr>
            <td>Sub-affiliate commission</td>
            <td>No limit</td>
            <td>No limit</td>
            <td>Up to $1000 per referral</td>
            <td>3 months</td>
          </tr>
        </tbody>
      </Element>
    </Box>
  )
}
