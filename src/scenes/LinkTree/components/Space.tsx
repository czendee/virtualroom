import { Suspense, useRef } from "react";
import Structure_00 from "../models/Structure_00";
import CodameCollisions from "../models/CodameCollisions";
import Social from "./Social";
import { Text, Interactable } from "spacesvr";
import Links from "./Links";

type SpaceProps = {
  linkData: {
    link: string;
    desc: string;
    src: string;
  }[];
  position?: [number, number, number];
  socials?: {
    instagram?: string;
    twitter?: string;
    web?: string;
  };
};

const Space = (props: SpaceProps) => {
  const { position = [0, 0, 0], linkData, socials } = props;
  const igLink = () => {
    if (socials && socials.instagram) {
      window.location.href = socials.instagram;
    }
  };
  const twitterLink = () => {
    if (socials && socials.twitter) {
      window.location.href = socials.twitter;
    }
  };
  const webLink = () => {
    if (socials && socials.web) {
      window.location.href = socials.web;
    }
  };

  return (
    <group scale={[5, 5, 5]} position={position}>
      <Suspense fallback={null}>
        <Structure_00 position-y={0.1155} />
      </Suspense>
      <Suspense fallback={null}>
        <CodameCollisions />
      </Suspense>
      {socials && (
        <group
          position={[-1.1, 0.2, -0.1]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.35, 0.35, 0.35]}
        >
          {socials.instagram && (
            <Social
              type="instagram"
              link={socials.instagram}
              position={[-0.75, 0, 0.075]}
            />
          )}
          {socials.twitter && <Social type="twitter" link={socials.twitter} />}
          {socials.web && (
            <Social type="web" link={socials.web} position={[0.75, 0, 0]} />
          )}
        </group>
      )}
      <Links links={linkData} />
      <Text
        text="Muse x Codame"
        rotation={[0, -Math.PI / 2, 0]}
        position={[0.56, 0.2, 0.75]}
        size={1}
        color="red"
      />
      <Text
        text="Artist Name"
        rotation={[0, Math.PI / 2, 0]}
        position={[-1.16, 0.2, 0.75]}
        size={1}
        color="red"
      />
    </group>
  );
};

export default Space;
