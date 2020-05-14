import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Refactoring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{ width: 50, padding: 10, color: "#333" }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio>
            <circle cx={50} cy={50} r={50} fill="currentColor" />
          </svg>
        </div>
        <h1>Refactoring</h1>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
