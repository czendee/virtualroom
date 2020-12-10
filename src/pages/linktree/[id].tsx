import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const LinkTreeSpace = dynamic(import("scenes/LinkTree"), { ssr: false });

const linkData = [
  {
    link: "https://www.spotify.com/us/",
    desc: "Spotify",
    asset: "",
  },
  {
    link: "https://www.youtube.com/",
    desc: "YouTube",
    asset: "",
  },
  {
    link: "https://www.apple.com/apple-music/",
    desc: "Apple Music",
    asset: "",
  },
  {
    link: "https://www.apple.com/apple-music/",
    desc: "Link 4",
    asset: "",
  },
  {
    link: "https://www.apple.com/apple-music/",
    desc: "Link 5",
    asset: "",
  },
  {
    link: "https://www.apple.com/apple-music/",
    desc: "Link 6",
    asset: "",
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>LinkTree 001</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LinkTreeSpace
        linkData={linkData}
        map="city"
        far={10000000}
        scenePos={[0, -150000, 0]}
        fogNear={15}
        hMapScale={20000}
        xzMapScale={100000}
        radius={10}
        textColor="blue"
        floorColor="black"
        night
      />
    </>
  );
};

export default LinkTree;
