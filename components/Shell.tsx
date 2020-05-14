import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import Head from "next/head";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>refactoring</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </ThemeProvider>
);
