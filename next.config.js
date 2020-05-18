const codesandbox = require("remark-codesandbox");
const withCSS = require("@zeit/next-css");

const mode = "iframe";

const withMDX = require("@next/mdx")({
  options: {
    rehypePlugins: [require("@mapbox/rehype-prism")],
    remarkPlugins: [
      [
        codesandbox,
        {
          mode,
          query:
            mode === "iframe"
              ? {
                  fontsize: "14px",
                  hidenavigation: 0,
                  theme: "dark",
                }
              : undefined,
          autoDeploy: false,
          customTemplates: {
            test: {
              extends: "n9m2w9q8x0",
              entry: "index.test.js",
            },
          },
        },
      ],
    ],
  },
});

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "jsx", "tsx", "md", "mdx"],
  })
);
