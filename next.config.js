const codesandbox = require("remark-codesandbox");

const mode = "iframe";

const withMDX = require("@next/mdx")({
  options: {
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

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "tsx", "md", "mdx"],
});
