import React from "react";
import Shell from "./Shell";
import "prismjs/themes/prism-tomorrow.css";

export default function BlogPostShell({ children }) {
  return <Shell>{children}</Shell>;
}
