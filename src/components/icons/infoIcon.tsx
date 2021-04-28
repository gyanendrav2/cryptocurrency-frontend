import { Box } from "@react-cssx/core"
import React from "react"
// import { IconInterface } from "../../interfaces/icon"

export const InfoIcon = (props) => (
  <Box
    as="svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={8} cy={8} r={8} fill="#CACFE3" />
    <path
      d="M9.24744 10.3525L9.16361 10.6952C8.9121 10.7945 8.7112 10.87 8.5616 10.922C8.41184 10.9741 8.23782 11 8.03956 11C7.73509 11 7.49826 10.9254 7.32936 10.7773C7.16045 10.6285 7.07597 10.44 7.07597 10.2114C7.07597 10.1229 7.0821 10.0318 7.09485 9.93908C7.1077 9.84621 7.12813 9.74162 7.1561 9.62472L7.47041 8.51223C7.49837 8.4057 7.52214 8.30477 7.54117 8.20932C7.56048 8.11446 7.56978 8.02718 7.56978 7.94862C7.56978 7.80655 7.54037 7.70717 7.48181 7.6513C7.42325 7.59559 7.3115 7.5673 7.14561 7.5673C7.06436 7.5673 6.98084 7.58032 6.89572 7.60548C6.81022 7.63076 6.73714 7.65517 6.67578 7.67786L6.75983 7.33489C6.96573 7.25106 7.16255 7.17927 7.35081 7.11968C7.53908 7.05994 7.71696 7.03004 7.88522 7.03004C8.1876 7.03004 8.42093 7.10312 8.58478 7.24928C8.74863 7.39555 8.83053 7.58516 8.83053 7.81881C8.83053 7.86715 8.82515 7.95233 8.81359 8.07407C8.80229 8.19609 8.78127 8.30789 8.75062 8.40957L8.43765 9.5176C8.412 9.60659 8.38893 9.70834 8.36887 9.82282C8.34817 9.93655 8.33827 10.0235 8.33827 10.0817C8.33827 10.2289 8.37108 10.3293 8.43684 10.3827C8.50309 10.4361 8.6172 10.4627 8.77928 10.4627C8.85537 10.4627 8.94195 10.4492 9.03815 10.4227C9.13408 10.3962 9.20404 10.3729 9.24744 10.3525ZM9.32681 5.70068C9.32681 5.89373 9.25405 6.05861 9.10784 6.19417C8.96201 6.33022 8.78627 6.3983 8.58069 6.3983C8.37446 6.3983 8.1983 6.33022 8.0508 6.19417C7.90356 6.05855 7.82978 5.89373 7.82978 5.70068C7.82978 5.50801 7.90356 5.34287 8.0508 5.20558C8.19803 5.06851 8.37452 5 8.58069 5C8.78622 5 8.96201 5.06867 9.10784 5.20558C9.25416 5.34287 9.32681 5.50806 9.32681 5.70068Z"
      fill="#1D2544"
    />
  </Box>
)
