// pages/index.js

import Head from "next/head";
import Signup from "./signup";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dribble</title>
        {/* <meta name="description" content="Sign up to Your Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Signup />
      </main>
      {/* <Footer /> */}
    </>
  );
}
