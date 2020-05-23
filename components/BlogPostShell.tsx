import React from "react";
import Shell, { LogotypeLink } from "./Shell";
import "prismjs/themes/prism-tomorrow.css";
import { MDXProvider } from "@mdx-js/react";
import { SubscribeForm } from "./SubscribeForm";
import Head from "next/head";
import { Flex, Text, Box } from "theme-ui";

export default function BlogPostShell(props) {
  const components = {
    code: (props) => (
      <div style={{ maxHeight: 500, overflowY: "auto" }} {...props} />
    ),
    inlineCode: (props) => <code {...props} />,
  };
  const postTitle = props.children[0].props.children;
  return (
    <Shell>
      <Head>
        <title>OK Julian - {postTitle}</title>
      </Head>
      <MDXProvider components={components}>
        <div className="dasdas" {...props} />
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
          <Text>
            Post written by{" "}
            <a href="https://twitter.com/juli_mayorga">Julian Mayorga</a>
          </Text>
        </Flex>
      </Box>
    </Shell>
  );
}
