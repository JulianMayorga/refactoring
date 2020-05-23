const codesandbox = require("remark-codesandbox");
const withCSS = require("@zeit/next-css");
const slug = require("remark-slug");
const path = require("path");

const mode = "button";

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
            recoil: {
              extends: `file:${path.resolve("./templates/recoil/")}`,
              entry: "src/App.js",
              query: {
                mode: "button", // Show button because dropping is broken on the codesandbox iframe
              },
            },
            "recoil-test": {
              extends: `file:${path.resolve("./templates/recoil/")}`,
              entry: "src/App.test.js",
              query: {
                previewwindow: "tests",
              },
            },
          },
        },
      ],
      slug,
    ],
  },
});

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "jsx", "tsx", "md", "mdx"],
  })
);
