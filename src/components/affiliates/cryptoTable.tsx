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
              <th
                style={{
                  backgroundColor: "#F7F8FA",
                  paddingTop: "1.875rem",
                  paddingBottom: "1.875rem",
                }}
              >
                <Element
                  as="img"
                  cssx={{ m: "auto" }}
                  src="affiliates/logo_1/logo-horizontal.svg"
                />
              </th>
              <th style={{ paddingTop: "1.875rem", paddingBottom: "1.875rem" }}>
                <Element as="img" cssx={{ m: "auto" }} src="affiliates/logo_1/BinanceLogo.svg" />
              </th>
              <th style={{ paddingTop: "1.875rem", paddingBottom: "1.875rem" }}>
                <Element as="img" cssx={{ m: "auto" }} src="affiliates/logo_1/krakenLogo.svg" />
              </th>
              <th style={{ paddingTop: "1.875rem", paddingBottom: "1.875rem" }}>
                <Element as="img" cssx={{ m: "auto" }} src="affiliates/logo_1/CoinbaseLogo.svg" />
              </th>
            </tr>
            <tr>
              <td style={{ width: "264px" }}>Commission rate</td>
              <td style={{ backgroundColor: "#F7F8FA" }}>40%</td>
              <td>20%-50%</td>
              <td>20%</td>
              <td>50%</td>
            </tr>
            <tr>
              <td style={{ width: "264px" }}>Sub-affiliate commission</td>
              <td style={{ backgroundColor: "#F7F8FA" }}>10%</td>
              <td>0%</td>
              <td>0%</td>
              <td>0%</td>
            </tr>
            <tr>
              <td style={{ width: "264px" }}>
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
          headerImg="affiliates/logo_1/logo-horizontal.svg"
          data={coinmetroCommision}
        />
        <CommissionMobCard
          bold={false}
          headerImg="affiliates/logo_1/BinanceLogo.svg"
          data={binanceCommission}
        />
        <CommissionMobCard
          bold={false}
          headerImg="affiliates/logo_1/krakenLogo.svg"
          data={krakenCommission}
        />
        <CommissionMobCard
          bold={false}
          headerImg="affiliates/logo_1/CoinbaseLogo.svg"
          data={coinBaseCommission}
        />
      </Box>
    </>
  )
}
