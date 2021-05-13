import React, { ReactElement, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
import { Box, Element, Flex } from "@react-cssx/core"
import { CurrencyOptionsInterface } from "../interfaces/currencyOptionsInterface"
import { ArrowdownIcon } from "./icons/arrowdownIcon"

interface LanguagePickerProps {
  value: CurrencyOptionsInterface
  disableDropdown?: boolean
  hideDropdownIcon?: boolean
}

const languages = [
  { lang: "Eng", locale: "en" },
  { lang: "Est", locale: "et" },
  { lang: "Rus", locale: "ru" },
]

export function LanguagePicker(): ReactElement {
  const [openCloseDropdown, setOpenCloseDropdown] = useState(false)
  const [language, setLangulage] = useState("Eng")
  const { pathname } = useRouter()
  return (
    <Flex
      align="center"
      justify="space-between"
      cssx={{
        borderRadius: 8,
        bg: "transparent",
        w: 80,
        px: 16,
        py: 9,
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={() => {
        if (!openCloseDropdown) {
          setOpenCloseDropdown(true)
        }
      }}
    >
      <Element
        as="p"
        cssx={{
          fontSize: 16,
          lineHeight: "1.25rem",
          color: "#fff",
          textTransform: "uppercase",
          marginBottom: 4.82,
        }}
      >
        {language}
      </Element>
      <Flex wrap="nowrap" justify="space-between" align="center" cssx={{ pos: "relative" }}>
        <ArrowdownIcon width={12} color="#fff" />
        {openCloseDropdown && (
          <Box
            cssx={{
              pos: "absolute",
              maxWidth: 104,
              borderRadius: 4,
              bg: "grey.dark",
              w: 104,
              top: "2.5rem",
              left: "-1rem",
              zIndex: 4,
              boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.25)",
            }}
          >
            {languages.map((item: { lang: string; locale: string }, i: number) => (
              <Flex
                align="center"
                justify="space-between"
                cssx={{ color: "white", px: 16, py: 9, textTransform: "capitalize" }}
                key={i}
                onClick={() => {
                  setOpenCloseDropdown(false)
                  setLangulage(item.lang)
                }}
              >
                <Link href={pathname} locale={item.locale}>
                  {item.lang}
                </Link>
              </Flex>
            ))}
            <Box
              cssx={{
                pos: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                w: "100%",
                h: "100vh",
                zIndex: "-1",
                // bg: "red"
              }}
              onClick={() => setOpenCloseDropdown(false)}
            />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

LanguagePicker.defaultProps = {
  disableDropdown: false,
  hideDropdownIcon: false,
}
