import { Box, Element, Flex } from "@react-cssx/core"
import React from "react"
import { xcmSupplyData, xcmOtherStats } from "../../../data/xcmSupplydata"
import { InfoIcon } from "../../icons/infoIcon"

interface SupplyDataItem {
  icon: React.ReactNode
  name: string
  price: string
}

function SupplyCardRow({ title, data }: { title: string; data: SupplyDataItem[] }) {
  return (
    <Box cssx={{ borderRadius: 8, p: 24, pl: 48, bg: "white", mb: 16 }}>
      <Element as="p" cssx={{ color: "teal.dark" }}>
        {title}
      </Element>
      {data.map((item: SupplyDataItem) => (
        <Flex align="center">
          <item.icon />
          <Flex cssx={{ ml: 25, py: 20, borderBottom: "1px solid", borderColor: "grey.light", w: "100%" }}>
            <Flex as="P" cssx={{ mr: 24, color: "purple.default", minWidth: 200 }}>
              {item.name} &nbsp; <InfoIcon />
            </Flex>
            <Element as="p" cssx={{ color: "grey.dark" }}>
              {item.price}
            </Element>
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
