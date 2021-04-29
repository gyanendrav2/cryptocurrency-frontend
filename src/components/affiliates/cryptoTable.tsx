import { Box, Element, Flex } from "@react-cssx/core"
import React, { useState } from "react"
import {
  binanceCommission,
  coinBaseCommission,
  coinmetroCommision,
  krakenCommission,
} from "../../data/affiliateTableData"
import { InfoIcon } from "../icons/infoIcon"
import CommissionMobCard from "./commissionMobCard"
import { CommissionStyle } from "./cssxStyle/commissionStyle"
import LimitInfoCard from "./limitInfoCard"

export default function CryptoTable() {
  const classes = CommissionStyle
  const [showInfoCard, setShowInfoCard] = useState(false)
  return (
    <>
      <Box cssx={classes.tableWrapper}>
        <Element as="table" cssx={classes.table}>
          <tbody>
            <tr>
              <th>&nbsp;</th>
              <th style={{ backgroundColor: "#F7F8FA" }}>
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
              <td style={{ backgroundColor: "#F7F8FA" }}>40%</td>
              <td>20%-50%</td>
              <td>20%</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Sub-affiliate commission</td>
              <td style={{ backgroundColor: "#F7F8FA" }}>10%</td>
              <td>0%</td>
              <td>0%</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>
                <Flex align="center" cssx={{ pos: "relative" }}>
                  <Element as="p" cssx={{ mr: 8 }}>
                    Limit
                  </Element>
                  <InfoIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowInfoCard(!showInfoCard)}
                  />
                  {showInfoCard && <LimitInfoCard hide={() => setShowInfoCard(!showInfoCard)} />}
                </Flex>
              </td>
              <td style={{ backgroundColor: "#F7F8FA" }}>No limit</td>
              <td>No limit</td>
              <td>Up to $1000 per referral</td>
              <td>3 months</td>
            </tr>
          </tbody>
        </Element>
      </Box>
      <Box
        cssx={{
          "@mq": {
            tablet: {
              display: "none",
            },
          },
        }}
      >
        <CommissionMobCard
          bold
          headerImg="affiliates/coinmetroLogo.png"
          data={coinmetroCommision}
        />
        <CommissionMobCard
          bold={false}
          headerImg="affiliates/BinanceLogo.png"
          data={binanceCommission}
        />
        <CommissionMobCard
          bold={false}
          headerImg="affiliates/krakenLogo.png"
          data={krakenCommission}
        />
        <CommissionMobCard
          bold={false}
          headerImg="affiliates/CoinbaseLogo.png"
          data={coinBaseCommission}
        />
      </Box>
    </>
  )
}
