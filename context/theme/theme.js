// Colors from https://coolors.co/ed254e-f9dc5c-c2eabd-011936-465362

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Define color mode configuration
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Extend the theme
const theme = extendTheme({
  config,
  colors: {
    primary: {
      100: "#d3dadd",
      200: "#a7b6bb",
      300: "#7c9199",
      400: "#506d77",
      500: "#244855",
      600: "#1d3a44",
      700: "#162b33",
      800: "#0e1d22",
      900: "#070e11",
    },
    secondary: {
      100: "#fadad6",
      200: "#f5b6ad",
      300: "#f09185",
      400: "#eb6d5c",
      500: "#e64833",
      600: "#b83a29",
      700: "#8a2b1f",
      800: "#5c1d14",
      900: "#2e0e0a",
    },
    tertiary: {
      100: "#e7dcd9",
      200: "#cfb9b3",
      300: "#b7958d",
      400: "#9f7267",
      500: "#874f41",
      600: "#6c3f34",
      700: "#512f27",
      800: "#36201a",
      900: "#1b100d",
    },
    dark: {
      100: "#e9efef",
      200: "#d3dfde",
      300: "#bccece",
      400: "#a6bebd",
      500: "#90aead",
      600: "#738b8a",
      700: "#566868",
      800: "#3a4645",
      900: "#1d2323",
    },
    light: {
      100: "#fefbf6",
      200: "#fdf6ec",
      300: "#fdf2e3",
      400: "#fcedd9",
      500: "#fbe9d0",
      600: "#c9baa6",
      700: "#978c7d",
      800: "#645d53",
      900: "#322f2a",
    },
  },

  // FONTS
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Inter', sans-serif",
    logo: "'Montserrat', sans-serif"
  },

  // Global styles
  styles: {
    global: (props) => ({
      body: {
        bg: mode(theme.colors.light[500], theme.colors.dark[400])(props),
        color: mode(theme.colors.dark[900], theme.colors.light[300])(props),
      },
    }),
  },
});

export default theme;
