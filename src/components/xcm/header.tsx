import React from "react";
import PropTypes from "prop-types";
import { Box } from "@react-cssx/core";
import { CurrencyPicker } from "../currency/currencyPicker";

export function Header(props) {
  return <Box cssx={{ bg: "white", px: 56, py: 66 }}>
      <CurrencyPicker />
  </Box>;
}

Header.propTypes = {};
