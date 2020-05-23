import React from "react";
import { ThemeProvider, Box, Grid, Text } from "theme-ui";
import theme from "./theme";
import Head from "next/head";
import NextLink from "next/link";

export function LogotypeLink() {
  return (
    <NextLink href="/">
      <Box sx={{ color: "#333", cursor: "pointer" }}>
        <Box
          sx={{
            width: 60,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            style={{ height: "100%", width: "100%" }}
            viewBox="0 0 104 50"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="currentColor" />
            <path
              d="M103.286 47.5C103.476 47.7857 103.571 48.0952 103.571 48.4286C103.571 48.8571 103.405 49.2381 103.071 49.5714C102.786 49.8571 102.429 50 102 50H83.5714C82.4762 50 81.619 49.619 81 48.8571L68.5714 33.5V48.0714C68.5714 48.5952 68.381 49.0476 68 49.4286C67.619 49.8095 67.1667 50 66.6429 50H51.9286C51.4048 50 50.9524 49.8095 50.5714 49.4286C50.1905 49.0476 50 48.5952 50 48.0714V1.92857C50 1.40476 50.1905 0.952384 50.5714 0.571431C50.9524 0.190478 51.4048 0 51.9286 0H66.6429C67.1667 0 67.619 0.190478 68 0.571431C68.381 0.952384 68.5714 1.40476 68.5714 1.92857V15.3571L79.8571 1.21429C80.5714 0.404762 81.4524 0 82.5 0H99.7143C100.143 0 100.5 0.166667 100.786 0.500002C101.119 0.785715 101.286 1.14286 101.286 1.57143C101.286 1.95238 101.167 2.28572 100.929 2.57143L84 23.2143L103.286 47.5Z"
              fill="currentColor"
            />
          </svg>
        </Box>
        <Text sx={{ fontWeight: "bold" }}>JULIAN</Text>
      </Box>
    </NextLink>
  );
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>OK Julian</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box
      sx={{
        padding: 3,
        borderBottom: "lightgray",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
      }}
    >
      <Grid
        sx={{
          gridAutoFlow: "column",
          width: "fit-content",
          alignItems: "center",
          justifyContent: "center",
        }}
        gap={2}
      >
        <LogotypeLink />
      </Grid>
    </Box>
    <Box
      sx={{
        maxWidth: ["100%", 1200],
        margin: "0 auto",
        paddingTop: 4,
        paddingBottom: 6,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      as="main"
    >
      {children}
    </Box>
  </ThemeProvider>
);
