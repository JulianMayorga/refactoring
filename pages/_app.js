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
      <footer className="my-24 flex justify-end items-center max-w-6xl mx-auto">
        <a
          className="cursor-pointer hover:underline flex flex-col items-center justify-center p-8 gap-2"
          href="https://twitter.com/_okjulian_"
          rel="noreferrer"
          target="_blank"
        >
          <img src="profile-pic.png" className="rounded-full w-14 h-w-14" />
          Julian
        </a>
      </footer>
    </>
  );
}

export default MyApp;
