import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const LinkTreeSpace = dynamic(import("scenes/LinkTree"), { ssr: false });

const linkData = [
  {
    link: "https://www.spotify.com/us/",
    desc: "Spotify (1)",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "https://www.youtube.com/",
    desc: "YouTube (2)",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "https://www.apple.com/apple-music/",
    desc: "Apple Music (3)",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "https://www.apple.com/apple-music/",
    desc: "Link 4",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "https://www.apple.com/apple-music/",
    desc: "Link 5",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "https://www.apple.com/apple-music/",
    desc: "Link 6",
    src: "/assets/gradient2.jpg",
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
