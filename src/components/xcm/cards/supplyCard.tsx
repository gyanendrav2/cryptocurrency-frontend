import React, { useEffect, useState } from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { xcmSupplyData, xcmOtherStats } from "../../../data/xcmSupplydata"
import { InfoIcon } from "../../icons/infoIcon"
import { ArrowdownIcon } from "../../icons/arrowdownIcon"
import { vaultAmountAPIcall, xcmSupplyAPIcall, lockedWalletAPIcall } from "../../../API/xcmAPI"
import { roundUpNumber } from "../../../helper/roundUpNumber"

interface SupplyDataItem {
  icon: any
  name: string
  price: string
  priceChange: string
}

function SupplyCardRowOne({
  title,
  data,
  mw,
}: {
  title: string
  data: SupplyDataItem[]
  mw: string
}) {
  return (
    <Box
      cssx={{
        borderRadius: 8,
        p: 16,
        px: 0,
        bg: "white",
        mb: 16,
        "@mq": {
          tablet: {
            p: 24,
            pl: 48,
          },
        },
      }}
    >
      <Element
        as="p"
        cssx={{
          color: "teal.dark",
          fontFamily: "Mulish",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 12,
          textTransform: "uppercase",
          borderBottom: "1px solid #CACFE3",
          py: 20,
          ml: 36,
        }}
      >
        {title}
      </Element>
      {data.map((item: SupplyDataItem, i: number) => (
        <Flex align="baseline" justify="center">
          <item.icon />
          <Flex
            align="baseline"
            justify="space-between"
            cssx={{
              ml: 8,
              py: 20,
              borderBottom: i !== data.length - 1 ? "1px solid" : "none",
              borderColor: i !== data.length - 1 ? "grey.light" : "none",
              pb: i !== data.length - 1 ? 20 : 0,
              w: "100%",
              "@mq": {
                xsm: {
                  ml: 8,
                  w: "84%",
                },
                tablet: {
                  ml: 25,
                  w: "100%",
                },
              },
            }}
          >
            <Flex wrap="nowrap" cssx={{ w: "100%" }}>
              <Element
                as="p"
                cssx={{
                  color: "purple.default",
                  mr: 8,
                  maxWidth: mw,
                  "@mq": {
                    tablet: {
                      maxWidth: "100%",
                    },
                  },
                }}
              >
                {item.name}
              </Element>
              <InfoIcon cssx={{ mt: "0.4rem" }} />
            </Flex>
            <Flex align="center" justify="flex-end" wrap="wrap">
              <Element as="p" cssx={{ color: "grey.dark" }}>
                {item.price}
              </Element>
              {item.priceChange !== "" && (
                <Flex align="center">
                  <ArrowdownIcon color="#C85839" />
                  <Element as="p" cssx={{ color: "red", ml: 8 }}>
                    {item.priceChange}
                  </Element>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Box>
  )
}

export default function SupplyCard() {
  const [card1Data, setCard1Data] = useState(xcmSupplyData)
  const [vaultValue, setVaultValue] = useState(xcmOtherStats)

  const handleAPIcall = async () => {
    const totalResult = await xcmSupplyAPIcall()
    const vaultResult = await vaultAmountAPIcall()
    const lockedWalletResult = await lockedWalletAPIcall()

    if (totalResult.status === 200) {
      const tempData = [...card1Data]
      tempData[0].price = roundUpNumber(totalResult.data.XCM.totalSupply) as any
      tempData[1].price = roundUpNumber(totalResult.data.XCM.circulatingSupply) as any
      tempData[2].price = roundUpNumber(totalResult.data.XCM.marketCap) as any
      setCard1Data(tempData)
    }
    if (totalResult.status === 200 && lockedWalletResult.status === 200) {
      const tempVaultData = [...vaultValue]
      tempVaultData[0].price = roundUpNumber(lockedWalletResult.data.allTime) as any
      tempVaultData[1].price = roundUpNumber(vaultResult.data) as any
      setVaultValue(tempVaultData)
    }
  }
  useEffect(() => {
    handleAPIcall()
  }, [])

  return (
    <Box>
      <SupplyCardRowOne title="xcm supply" mw="100%" data={card1Data} />
      <SupplyCardRowOne title="xcm supply" mw="63%" data={vaultValue} />

      {/* <SupplyCardRowTwo title="other stats" data={vaultValue} /> */}
    </Box>
  )
}
