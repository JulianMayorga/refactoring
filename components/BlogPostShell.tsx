import React from "react";
import Shell, { LogotypeLink } from "./Shell";
import "prismjs/themes/prism-tomorrow.css";
import { MDXProvider } from "@mdx-js/react";
import { SubscribeForm } from "./SubscribeForm";
import Head from "next/head";
import { Flex, Text, Box, Avatar, Heading, Grid } from "theme-ui";
import { TwitterShareButton } from "react-twitter-embed";
import LinkIcon from "./ExternalLinkIcon.jsx";

function Links({ links }) {
  return (
    <ul>
      {links.map((link) => {
        if (Array.isArray(link[1])) {
          return (
            <li>
              {link[0]}
              <Links links={link[1]} />
            </li>
          );
        }
        const text = link[0];
        const href = link[1];
        return (
          <li>
            <a href={href} target="_blank">
              {text}
              <LinkIcon
                style={{ marginLeft: 5, verticalAlign: "middle" }}
                src="/insert_link.svg"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function BlogPostShell(props) {
  const components = {
    code: (props) => (
      <div style={{ maxHeight: 500, overflowY: "auto" }} {...props} />
    ),
  };
  const title = props.meta.title;
  const TableOfContents = () =>
    props.children.find((child) => child.props.className === "toc");
  const previousKnowledge = props.meta.previousKnowledge;
  const toolsUsed = props.meta.toolsUsed;
  const date = props.meta.date;
  const children = React.Children.map(props.children, (child) => {
    if (child.props.className === "toc") {
      return null;
    }
    return child;
  });
  return (
    <Shell>
      <Head>
        <title>OK Julian - {title}</title>
      </Head>
      <Heading as="h1">{title}</Heading>
      <p>{date}</p>
      <Grid columns={[1, 1, "2fr 1fr"]}>
        <Box sx={{ order: [2, 2, 1] }}>
          <MDXProvider components={components}>
            {children}
            <TwitterShareButton
              options={{
                text: `"${title}", a guide by Julian Mayorga`,
                size: "large",
                via: "juli_mayorga",
              }}
            />
          </MDXProvider>
        </Box>
        <Box sx={{ order: [1, 1, 2] }}>
          <Box
            sx={{
              position: "sticky",
              top: 0,
              left: 0,
              padding: 4,
              overflowY: "auto",
              maxHeight: [null, null, "100vh"],
            }}
          >
            <Heading>Table of contents</Heading>
            <TableOfContents />
            <Heading>Previous knowledge</Heading>
            <Links links={previousKnowledge} />
            <Heading>Tools used</Heading>
            <Links links={toolsUsed} />
          </Box>
        </Box>
      </Grid>
      <Box
        style={{
          borderTop: "solid 1px lightgray",
          marginTop: 80,
          paddingTop: 80,
        }}
      >
        <SubscribeForm />
        <Flex
          style={{
            marginTop: 80,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <LogotypeLink />
          <Flex sx={{ alignItems: "center" }}>
            <Avatar src="/profile-pic.png" sx={{ marginRight: 10 }} />
            <Text>
              Written by
              <br />
              <a href="https://twitter.com/juli_mayorga">Julian Mayorga</a>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Shell>
  );
}
