import { Link, Text, Grid } from "theme-ui";
import NextLink from "next/link";
import Shell from "../components/Shell";

export default function Home() {
  return (
    <Shell>
      <Grid marginTop={4}>
        <Link>
          <NextLink href="/performant-shared-state-with-recoil">
            <Text
              sx={{
                cursor: "pointer",
                width: "fit-content",
                fontSize: 3,
                textDecoration: "underline",
              }}
            >
              Performant shared state with Recoil
            </Text>
          </NextLink>
        </Link>
      </Grid>
    </Shell>
  );
}
