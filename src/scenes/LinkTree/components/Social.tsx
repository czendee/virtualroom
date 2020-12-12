import { Interactable } from "spacesvr";
import { Suspense } from "react";
import { Vector3 } from "three";

import Instagram from "../models/Instagram";
import Twitter from "../models/Twitter";
import Web from "../models/Web";

type SocialProps = {
  type: "instagram" | "twitter" | "web";
  link: string;
  position?: [number, number, number];
};

const Social = (props: SocialProps) => {
  const { link, type, position = new Vector3(0, 0, 0) } = props;

  const model =
    type === "instagram" ? (
      <Instagram />
    ) : type === "twitter" ? (
      <Twitter />
    ) : type === "web" ? (
      <Web />
    ) : null;

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <group position={position}>
      {/*<spotLight position={[0, 0.25, 0]} rotation={[0, Math.PI, 0]} intensity={0.05} color="white" />*/}
      <Suspense fallback={null}>
        <Interactable onClick={handleClick}>{model}</Interactable>
      </Suspense>
    </group>
  );
};

export default Social;
