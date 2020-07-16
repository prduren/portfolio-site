import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    purple: "#160f29",
    blue: "#246173",
    green: "#368f8b",
    tan: "#f3dfc1",
    brown: "#ddbea8",
    white: "white",
  },
  fonts: ["sans-serif", "Roboto"],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
