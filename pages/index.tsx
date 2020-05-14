import Shell from "../components/Shell";
import { Box, Heading, Grid } from "theme-ui";

export default function Home() {
  return (
    <Shell>
      <Box>
        <Box
          as="main"
          sx={{ maxWidth: ["100%", 1200], margin: "0 auto", paddingTop: 4 }}
        >
          <Grid
            sx={{
              gridAutoFlow: "column",
              width: "fit-content",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: 50, padding: 2 }}>
              <svg viewBox="0 0 100 100" preserveAspectRatio="true">
                <circle cx={50} cy={50} r={50} fill="currentColor" />
              </svg>
            </Box>
            <Heading>refactoring</Heading>
          </Grid>
        </Box>
      </Box>
    </Shell>
  );
}
