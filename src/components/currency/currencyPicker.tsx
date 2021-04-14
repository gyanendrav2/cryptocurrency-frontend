import React from "react";
import PropTypes from "prop-types";
import { Box, Element, Flex } from "@react-cssx/core";
import { EuropeFlagIcon } from "../icons/europeFlagIcon";
import { ArrowdownIcon } from "../icons/arrowdownIcon";

export function CurrencyPicker(props) {
  return (
    <Box cssx={{ borderRadius: 8, bg: "grey.dark", w: 104, px: 16, py: 12.82 }}>
      <Element
        as="p"
        cssx={{
          fontSize: 12,
          lineHeight: "20px",
          color: "teal.light",
          textTransform: "uppercase",
          marginBottom: 4.82,
        }}
      >
        euro
      </Element>
      <Flex wrap="nowrap" justify="space-between" align="center">
        <EuropeFlagIcon />
        <Element
          as="p"
          cssx={{ fontSize: 14, color: "white", textTransform: "uppercase" }}
        >
          eur
        </Element>
        <ArrowdownIcon color="#C7EFEE" />
      </Flex>
    </Box>
  );
}

CurrencyPicker.propTypes = {};
