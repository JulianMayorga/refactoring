import React from "react";
import Shell, { LogotypeLink } from "./Shell";
import "prismjs/themes/prism-tomorrow.css";
import { MDXProvider } from "@mdx-js/react";
import { SubscribeForm } from "./SubscribeForm";
import Head from "next/head";
import { Flex, Text, Box, Avatar } from "theme-ui";
import { TwitterShareButton } from "react-twitter-embed";

export default function BlogPostShell(props) {
  const components = {
    code: (props) => (
      <div style={{ maxHeight: 500, overflowY: "auto" }} {...props} />
    ),
  };
  const postTitle = props.children[0].props.children;
  return (
    <Shell>
      <Head>
        <title>OK Julian - {postTitle}</title>
      </Head>
      <MDXProvider components={components}>
        <div {...props} />
        <TwitterShareButton
          options={{
            text: `"${postTitle}", a guide by Julian Mayorga`,
            size: "large",
            via: "juli_mayorga",
          }}
        />
      </MDXProvider>
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
            <Avatar src="/profile-pic.png" />
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
