import { createTheme } from "@mui/material";

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const theme = createTheme({
  palette: {
    text: {
      primary: "#000000",
    },
    background: {
      default: "#ffffff",
      secondary: "#dbdbdb",
    },
    primary: {
      main: "#94bccc",
      1: "#e7f1f4",
      2: "#a0cbad",
      3: "#e4f2e8",
      4: "#d53302",
      5: "#fbe8e3",
      6: "#fcc560",
      7: "#fff7e9",
      8: "#00012a",
      9: "#dadaea",
    },
  },
  breakpoints: {
    values: { ...breakpoints },
    unit: "px",
  },
  typography: {
    h1: {
      fontFamily: "Overpass Mono",
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontFamily: "Overpass Mono",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontFamily: "Overpass Mono",
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h4: {
      fontFamily: "Overpass Mono",
      fontWeight: 400,
      fontSize: "1.5rem",
    },
    h5: {
      fontFamily: "Overpass Mono",
      fontWeight: 600,
      fontSize: "3rem",
    },
    body1: {
      fontFamily: "Overpass Mono",
      fontWeight: 400,
      fontSize: "1rem",
    },
    button: {
      fontFamily: "Overpass Mono",
      fontWeight: 700,
      fontSize: "1.5rem",
      textTransform: "none",
    },
  },
});
