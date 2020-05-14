import { Link, Text, Grid } from "theme-ui";
import NextLink from "next/link";
import Shell from "../components/Shell";

export default function Home() {
  return (
    <Shell>
      <Grid marginTop={4}>
        <Link>
          <NextLink href="/red-green-refactor">
            <Text
              sx={{
                cursor: "pointer",
                width: "fit-content",
                fontSize: 3,
                textDecoration: "underline",
              }}
            >
              Red, green, refactor
            </Text>
          </NextLink>
        </Link>
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
      </Grid>
    </Shell>
  );
}
