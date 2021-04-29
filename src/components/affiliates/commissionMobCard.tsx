import { Box, Element, Flex } from "@react-cssx/core"
import React from "react"

type DataType = { key: string; value: string }

interface CommissionMobCardProps {
  headerImg: string
  data: DataType[]
  bold: boolean
}

export default function CommissionMobCard({
  headerImg,
  data,
  bold,
}: CommissionMobCardProps): React.ReactElement {
  return (
    <Box cssx={{ border: "1px solid", borderColor: "grey.light", borderRadius: 4, p: 16, mb: 16 }}>
      <Box cssx={{ borderBottom: "1px solid", borderColor: "grey.light", py: 8, pb: 16 }}>
        <Element as="img" src={headerImg} alt={headerImg} />
      </Box>
      {data.map((item: DataType, i: number) => (
        <Box
          key={i}
          cssx={{
            borderBottom: i === data.length - 1 ? "none" : "1px solid",
            borderColor: "grey.light",
            py: 16,
            pb: i === data.length - 1 ? 8 : 16,
          }}
        >
          <Flex align="center" justify="space-between">
            <Element as="p" cssx={{ fontSize: 16, lineHeight: "24px", fontWeight: 600 }}>
              {item.key}
            </Element>
            <Element
              as="h1"
              cssx={{
                fontSize: 16,
                lineHeight: "24px",
                color: "grey.dark",
                fontWeight: bold ? 800 : 600,
                maxWidth: 117,
                textAlign: "right",
              }}
            >
              {item.value}
            </Element>
          </Flex>
        </Box>
      ))}
    </Box>
  )
}
