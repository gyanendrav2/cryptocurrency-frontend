import { ITheme } from "@react-cssx/core"

// Must use ems (divide pixels by 16)
const breakpoints: ITheme["breakpoints"] = {
  xsm: "20rem", // 320px
  phablet: "30em", // 480px
  tablet: "48em", // 768px
  desktop: "75em", // 1200px
  xxl: "90em", // 1440px

  // sm: "40em", // 640px
  // md: "48em", // 768px
  // lg: "64em", // 1024px
  // xl: "90em", // 1440px
  // xxl: "100em", // 1600px
}

const colors: ITheme["colors"] = {
  primary: "#32407B",
  accent: "#FFCE47",

  green: "#23AA63",
  red: "#C85839",

  grey: {
    dark: "#1D2544",
    dark2: "#2E3654",
    bg: "#F7F8FA",
    light: "#CACFE3",
  },

  // darkGrey: "#111930",
  // bgGrey: "#F7F8FA",
  teal: {
    dark: "#165179",
    light: "#B2CAD8",
    lighter: "#ecf1f5",
    lightop2: "rgba(178, 202, 216, 0.2)",
  },
  indigo: {
    light: "#C7EFEE",
  },
  yellow: {
    dark: "#FFCE47",
    darker: "#DBB13B",
    darkest: "#B8932F",
  },

  purple: {
    light: "#817BB1",
    default: "#635C99",
    dark: "#32407B",
  },
  // white:
  // {
  //   default: "#fff",
  // }
  // gray: {
  //   900: "#1a1f36",
  //   800: "#2a2f45",
  //   700: "#3c4257",
  //   600: "#4f566b",
  //   500: "#697386",
  //   400: "#8792a2",
  //   300: "#a3acb9",
  //   200: "#c1c9d2",
  //   100: "#e3e8ee",
  //   50: "#f7fafc",
  // },
  // blue: {
  //   900: '#131f41',
  //   800: '#212d63',
  //   700: '#2f3d89',
  //   600: '#3d4eac',
  //   500: '#556cd6',
  //   400: '#6c8eef',
  //   300: '#7dabf8',
  //   200: '#a4cdfe',
  //   100: '#d6ecff',
  //   50: '#f5fbff',
  // },
  // cyan: {
  //   900: '#042235',
  //   800: '#093353',
  //   700: '#06457a',
  //   600: '#075996',
  //   500: '#067ab8',
  //   400: '#3a97d4',
  //   300: '#4db7e8',
  //   200: '#7fd3ed',
  //   100: '#c4f1f9',
  //   50: '#edfdfd',
  // },
  // green: {
  //   900: '#082429',
  //   800: '#0b3733',
  //   700: '#0d4b3b',
  //   600: '#0e6245',
  //   500: '#09825d',
  //   400: '#1ea672',
  //   300: '#33c27f',
  //   200: '#85d996',
  //   100: '#cbf4c9',
  //   50: '#efffed',
  // },
  // orange: {
  //   900: '#420e11',
  //   800: '#5d161b',
  //   700: '#7e1e23',
  //   600: '#9e2f28',
  //   500: '#c44c34',
  //   400: '#e56f4a',
  //   300: '#f5925e',
  //   200: '#f8b886',
  //   100: '#fee3c0',
  //   50: '#fffaee',
  // },
  // purple: {
  //   900: '#2d0f55',
  //   800: '#401d6a',
  //   700: '#5b2b80',
  //   600: '#7b3997',
  //   500: '#a450b5',
  //   400: '#c96ed0',
  //   300: '#e28ddc',
  //   200: '#f0b4e4',
  //   100: '#fce0f6',
  //   50: '#fff8fe',
  // },
  // red: {
  //   900: '#420828',
  //   800: '#5e1039',
  //   700: '#80143f',
  //   600: '#a41c4e',
  //   500: '#cd3d64',
  //   400: '#ed5f74',
  //   300: '#fa8389',
  //   200: '#fbb5b2',
  //   100: '#fde2dd',
  //   50: '#fff8f5',
  // },
  // yellow: {
  //   900: '#3a1607',
  //   800: '#571f0d',
  //   700: '#762b0b',
  //   600: '#983705',
  //   500: '#bb5504',
  //   400: '#d97917',
  //   300: '#e5993e',
  //   200: '#efc078',
  //   100: '#f8e5b9',
  //   50: '#fcf9e9',
  // },
  // violet: {
  //   900: '#1f184e',
  //   800: '#352465',
  //   700: '#4b3480',
  //   600: '#61469b',
  //   500: '#8260c3',
  //   400: '#9c82db',
  //   300: '#b0a1e1',
  //   200: '#c7c2ea',
  //   100: '#e6e6fc',
  //   50: '#f8f9fe',
  // },
}

const space: ITheme["space"] = {
  px: "1px",
  // 2: '0.5rem',
  // 3: '0.75rem',
  // 4: '1rem',
  // 5: '1.25rem',
  // 6: '1.5rem',
  // 8: '2rem',
  // 10: '2.5rem',
  // 12: '3rem',
  // 16: '4rem',
  // 20: '5rem',
  // 24: '6rem',
  // 32: '8rem',
  // 40: '10rem',
  // 48: '12rem',
  // 56: '14rem',
  // 64: '16rem',
}

const fonts: ITheme["fonts"] = {
  sans:
    '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'SFMono-Regular, Menlo, Monaco,Consolas, "Liberation Mono", "Courier New",monospace',
}

const fontSizes: ITheme["fontSizes"] = {
  // xs: '0.75rem',
  // sm: '0.875rem',
  // base: '1rem',
  // lg: '1.125rem',
  // xl: '1.25rem',
  // '2xl': '1.5rem',
  // '3xl': '1.875rem',
  // '4xl': '2.25rem',
  // '5xl': '3rem',
  // '6xl': '4rem',
}

const fontWeights: ITheme["fontWeights"] = {
  hairline: 100,
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const lineHeights: ITheme["lineHeights"] = {
  normal: "normal",
  none: "1",
  shorter: "1.25",
  short: "1.375",
  base: "1.5",
  tall: "1.625",
  taller: "2",
}

const letterSpacings: ITheme["letterSpacings"] = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
}

const borders: ITheme["borders"] = {}

const borderWidths: ITheme["borderWidths"] = {}

const borderStyles: ITheme["borderStyles"] = {}

const radii: ITheme["radii"] = {
  none: "0",
  sm: "0.125rem",
  md: "0.25rem",
  lg: "0.5rem",
  full: "9999px",
}

const shadows: ITheme["shadows"] = {
  sm: "0 2px 5px 0 rgba(60,66,87, .12), 0 1px 1px 0 rgba(0,0,0, .12)",
  md: "0 7px 14px 0 rgba(60,66,87, .12), 0 3px 6px 0 rgba(0,0,0, .12)",
  lg: "0 15px 35px 0 rgba(60,66,87, .12), 0 5px 15px 0 rgba(0,0,0, .12)",
  xl:
    "0 50px 100px 0 rgba(60,66,87, .12), 0 15px 35px 0 rgba(60,66,87, .12), 0 5px 15px 0 rgba(0,0,0, .12)",
  none: "none",
  outline: "0 0 0 2px rgb(65, 105, 225, .5)",
}

const zIndices: ITheme["zIndices"] = {}

const sizes: ITheme["sizes"] = {
  px: "1px",
  full: "100%",
}

const variants: ITheme["variants"] = {
  button: {
    yellow: {
      bg: "accent",
      color: "grey.dark",
      fontWeight: 800,
      px: 30,
      py: 12,
      borderRadius: 9999,
      boxShadow: "0px 1px 2px rgba(255, 206, 71, 0.24), 0px 2px 4px rgba(255, 206, 71, 0.24)",
      transition: "background 150ms ease-in-out",
      ":hover": {
        bg: "yellow.darker",
      },
      ":active": {
        bg: "yellow.darkest",
      },
    },
    purple: {
      bg: "purple.default",
      color: "white",
      fontWeight: 800,
      px: 30,
      py: 12,
      borderRadius: 9999,
      boxShadow: "0px 2px 4px rgba(58, 58, 68, 0.2), 0px 4px 8px rgba(90, 91, 106, 0.2)",
      transition: "background 150ms ease-in-out",
      ":hover": {
        bg: "purple.light",
      },
      ":active": {
        bg: "purple.darkest",
      },
    },
    outline: {
      bg: "purple.default",
      color: "white",
      fontWeight: 800,
      px: 30,
      py: 12,
      borderRadius: 9999,
      boxShadow: "0px 2px 4px rgba(58, 58, 68, 0.2), 0px 4px 8px rgba(90, 91, 106, 0.2)",
      ":hover": {
        bg: "purple.light",
      },
      ":active": {
        bg: "purple.dark",
      },
    },
  },
}

const globalStyles: ITheme["globalStyles"] = {
  ".p": { fontSize: 12 },
  html: {
    fontWeight: 600,
    fontFamily: "sans",
  },
}

const theme: ITheme = {
  breakpoints,
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  borders,
  borderWidths,
  borderStyles,
  radii,
  shadows,
  zIndices,
  sizes,
  variants,
  globalStyles,
}

export default theme
