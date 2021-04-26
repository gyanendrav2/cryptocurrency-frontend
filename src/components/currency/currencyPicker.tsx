import React, { ReactElement, useState } from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { ArrowdownIcon } from "../icons/arrowdownIcon"
import { currencyOptions } from "../../data/currency"
import { CurrencyOptionsInterface } from "../../interfaces/currencyOptionsInterface"

interface CurrencyPickerProps {
  handleOnChange?: (e: CurrencyOptionsInterface) => void
  value: CurrencyOptionsInterface
  disableDropdown?: boolean
  hideDropdownIcon?: boolean
}

export function CurrencyPicker({
  handleOnChange,
  value,
  disableDropdown,
  hideDropdownIcon,
}: CurrencyPickerProps): ReactElement {
  const [openCloseDropdown, setOpenCloseDropdown] = useState(false)
  return (
    <Box
      cssx={{
        borderRadius: 8,
        bg: "grey.dark",
        w: 104,
        px: 16,
        py: 9,
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={() => {
        if (!openCloseDropdown && !disableDropdown) {
          setOpenCloseDropdown(true)
        }
      }}
    >
      <Element
        as="p"
        cssx={{
          fontSize: 12,
          lineHeight: "1.25rem",
          color: "teal.light",
          textTransform: "uppercase",
          marginBottom: 4.82,
        }}
      >
        {value.currency}
      </Element>
      <Flex wrap="nowrap" justify="space-between" align="center" cssx={{ pos: "relative" }}>
        <img src={value.flag} style={{ width: 18, height: 18 }} alt={value.flag} />
        <Element
          as="p"
          cssx={{
            fontSize: 14,
            color: "white",
            textTransform: "uppercase",
            mr: "auto",
            ml: "0.5rem",
          }}
        >
          {value.name}
        </Element>
        {!hideDropdownIcon && <ArrowdownIcon color="#C7EFEE" />}
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
            {currencyOptions.map((item: CurrencyOptionsInterface, i: number) => (
              <Flex
                align="center"
                justify="space-between"
                cssx={{ color: "white", px: 16, py: 9 }}
                key={i}
                onClick={() => {
                  handleOnChange(item)
                  setOpenCloseDropdown(false)
                }}
              >
                <img src={item.flag} style={{ width: 18, height: 18 }} alt={item.flag} />
                {item.name}
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
              }}
              onClick={() => setOpenCloseDropdown(false)}
            />
          </Box>
        )}
      </Flex>
    </Box>
  )
}

CurrencyPicker.defaultProps = {
  disableDropdown: false,
  handleOnChange: () => {},
  hideDropdownIcon: false,
}
