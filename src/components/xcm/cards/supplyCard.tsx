import React from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { xcmSupplyData, xcmOtherStats } from "../../../data/xcmSupplydata"
import { InfoIcon } from "../../icons/infoIcon"
import { ArrowdownIcon } from "../../icons/arrowdownIcon"

interface SupplyDataItem {
  icon: any
  name: string
  price: string
  priceChange: string
}

function SupplyCardRowOne({ title, data }: { title: string; data: SupplyDataItem[] }) {
  return (
    <Box
      cssx={{
        borderRadius: 8,
        p: 24,
        pl: 48,
        bg: "white",
        mb: 16,
        "@mq": {
          xsm: {
            p: 16,
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
        <Flex align="center" justify="center">
          <item.icon />
          <Flex
            align="center"
            justify="space-between"
            cssx={{
              ml: 25,
              py: 20,
              borderBottom: i !== data.length - 1 ? "1px solid" : "none",
              borderColor: i !== data.length - 1 ? "grey.light" : "none",
              pb: i !== data.length - 1 ? 20 : 0,
              w: "100%",
              "@mq": {
                xsm: {
                  ml: 10,
                  w: "84%",
                },
                tablet: {
                  ml: 25,
                  w: "100%",
                },
              },
            }}
          >
            <Flex as="P" cssx={{ mr: 24, color: "purple.default", w: "50%" }}>
              {item.name} &nbsp; <InfoIcon cssx={{ mt: "0.4rem" }} />
            </Flex>
            <Flex align="center" justify="space-between" wrap="wrap" cssx={{ w: "50%" }}>
              <Element as="p" cssx={{ color: "grey.dark", mr: 24 }}>
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
function SupplyCardRowTwo({ title, data }: { title: string; data: SupplyDataItem[] }) {
  return (
    <Box
      cssx={{
        borderRadius: 8,
        p: 24,
        pl: 48,
        bg: "white",
        mb: 16,
        "@mq": {
          xsm: {
            p: 16,
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
        <Flex align="center" justify="center">
          <item.icon />
          <Flex
            align="center"
            justify="center"
            cssx={{
              ml: 25,
              py: 20,
              borderBottom: i !== data.length - 1 ? "1px solid" : "none",
              borderColor: i !== data.length - 1 ? "grey.light" : "none",
              pb: i !== data.length - 1 ? 20 : 0,
              w: "100%",
            }}
          >
            <Flex as="P" cssx={{ mr: 24, color: "purple.default", w: "50%" }}>
              {item.name} &nbsp; <InfoIcon cssx={{ mt: "0.4rem" }} />
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              wrap="wrap"
              cssx={{
                w: "50%",
              }}
            >
              <Element as="p" cssx={{ color: "grey.dark", mr: 24 }}>
                {item.price}
              </Element>
              {item.priceChange !== "" && (
                <Flex align="center">
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
  return (
    <Box>
      <SupplyCardRowOne title="xcm supply" data={xcmSupplyData} />
      <SupplyCardRowTwo title="other stats" data={xcmOtherStats} />
    </Box>
  )
}
