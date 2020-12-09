import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Steven = dynamic(import("scenes/Steven"), { ssr: false });

const StevenPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stevens Playground</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Steven />
    </>
  );
};

export default StevenPage;
