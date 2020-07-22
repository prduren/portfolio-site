import React from "react";
import { ThemeProvider } from "styled-components";
import { generateMedia } from "styled-media-query";
import { WrapRootElementBrowserArgs, WrapPageElementBrowserArgs } from "gatsby";

export const breakpoints = ["360px", "550px", "750px", "1000px", "1300px"];
const [sm, md, lg] = breakpoints;

export const containerWidths = {
  sm,
  md,
  lg,
};

export const media = generateMedia<typeof containerWidths, PrdurenTheme>({
  sm,
  md,
  lg,
});

export interface PrdurenTheme {
  colors: {
    purple: string;
    blue: string;
    green: string;
    tan: string;
    brown: string;
    white: string;
  };
  fonts: {
    hdr: string;
    main: string;
  };
  fontSize: {
    sml: string;
    med: string;
    lrg: string;
  };
}

const theme: PrdurenTheme = {
  colors: {
    purple: "#160f29",
    blue: "#246173",
    green: "#368f8b",
    tan: "#faf1e3",
    brown: "#ddbea8",
    white: "white",
  },
  fonts: {
    hdr: "'Chivo', sans-serif",
    main: "'Overpass', sans-serif",
  },
  fontSize: {
    sml: "1.6rem",
    med: "2.5rem",
    lrg: "5rem",
  },
};

export function wrapRootElement({ element }: WrapRootElementBrowserArgs) {
  return (
    <ThemeProvider theme={theme}>
      <>{element}</>
    </ThemeProvider>
  );
}
