import React from "react";
import { ThemeProvider, Box, Grid, Heading, Flex } from "theme-ui";
import theme from "./theme";
import Head from "next/head";
import NextLink from "next/link";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>refactoring</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box sx={{ maxWidth: ["100%", 1200], margin: "0 auto", paddingTop: 4 }}>
      <Grid
        sx={{
          gridAutoFlow: "column",
          width: "fit-content",
          alignItems: "center",
          justifyContent: "center",
        }}
        gap={2}
      >
        <Box
          sx={{
            width: 30,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            style={{ height: "100%", width: "100%" }}
            viewBox="0 0 100 100"
            preserveAspectRatio="true"
          >
            <circle cx={50} cy={50} r={50} fill="currentColor" />
          </svg>
        </Box>
        <NextLink href="/">
          <Heading sx={{ cursor: "pointer" }}>refactoring</Heading>
        </NextLink>
      </Grid>
      <Box as="main" sx={{ paddingTop: 4 }}>
        {children}
      </Box>
    </Box>
  </ThemeProvider>
);
