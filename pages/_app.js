import "tailwindcss/tailwind.css";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import Head from "next/head";
import { OKJulian } from "../components/OKJulian";

const components = {
  wrapper: (props) => (
    <div className="px-4 py-2 md:px-0 md:py-8 prose prose-sm sm:prose lg:prose-lg xl:prose-xl font-serif mx-auto">
      <main {...props} />
    </div>
  ),
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Julian</title>
        <link rel="icon" href="/ok.png" />
      </Head>
      <nav className="px-12 py-8">
        <Link href="/">
          <a className="hover:underline flex items-center">
            <OKJulian className="h-12 mr-4" />
          </a>
        </Link>
      </nav>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
      <footer className="my-24 text-center">
        Built with ❤️ by{" "}
        <a
          className="underline cursor-pointer hover:text-pink-300"
          href="https://twitter.com/_okjulian_"
          rel="noreferrer"
          target="_blank"
        >
          Julian
        </a>
      </footer>
    </>
  );
}

export default MyApp;
