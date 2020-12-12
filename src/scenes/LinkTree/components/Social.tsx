import { Interactable } from "spacesvr";
import { Suspense, useMemo, useRef } from "react";
import { SpotLight, Vector3 } from "three";

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
  const spotLight = useMemo(() => new SpotLight(), []);

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
      <primitive
        object={spotLight}
        angle={type === "instagram" ? Math.PI / 11 : Math.PI / 10}
        intensity={0.75}
        position={type === "instagram" ? [-0.25, 0, 1] : [0, 0, 1]}
        color="#AAAAAA"
      />
      <primitive object={spotLight.target} position={[0, 0, 0]} />
      <Suspense fallback={null}>
        <Interactable onClick={handleClick}>{model}</Interactable>
      </Suspense>
    </group>
  );
};

export default Social;
