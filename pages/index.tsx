import { Box, Link, Text } from "theme-ui";
import NextLink from "next/link";
import Shell from "../components/Shell";

export default function Home() {
  return (
    <Shell>
      <Box marginTop={4}>
        <Link>
          <NextLink href="/counter-component">
            <Text
              sx={{
                cursor: "pointer",
                width: "fit-content",
                fontSize: 3,
                textDecoration: "underline",
              }}
            >
              Counter component
            </Text>
          </NextLink>
        </Link>
      </Box>
    </Shell>
  );
}
