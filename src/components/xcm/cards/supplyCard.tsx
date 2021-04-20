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

function SupplyCardRow({ title, data }: { title: string; data: SupplyDataItem[] }) {
  return (
    <Box cssx={{ borderRadius: 8, p: 24, pl: 48, bg: "white", mb: 16 }}>
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
      {data.map((item: SupplyDataItem) => (
        <Flex align="center">
          <item.icon />
          <Flex
            align="center"
            justify="space-between"
            cssx={{
              ml: 25,
              py: 20,
              borderBottom: "1px solid",
              borderColor: "grey.light",
              w: "100%",
            }}
          >
            <Flex as="P" cssx={{ mr: 24, color: "purple.default", w: "50%" }}>
              {item.name} &nbsp; <InfoIcon />
            </Flex>
            <Flex align="center" justify="space-between" cssx={{ w: "50%" }}>
              <Element as="p" cssx={{ color: "grey.dark", mr: 24 }}>
                {item.price}
              </Element>
              {item.priceChange !== "" && (
                <Flex align="center">
                  <ArrowdownIcon color="red" />
                  <Element as="p" cssx={{ color: "grey.dark", ml: 8 }}>
                    {item.priceChange}
                  </Element>
                </Flex>
              )}
            </Flex>

            {/* <Element as="p" cssx={{ color: "red" }}>
              <InfoIcon color="red" /> {item.priceChange}
            </Element> */}
          </Flex>
        </Flex>
      ))}
    </Box>
  )
}

export default function SupplyCard() {
  return (
    <Box>
      <SupplyCardRow title="xcm supply" data={xcmSupplyData} />
      <SupplyCardRow title="other stats" data={xcmOtherStats} />
    </Box>
  )
}
