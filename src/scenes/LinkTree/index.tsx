import {
  StandardEnvironment,
  KeyframeEnvironment,
  Fog,
  Keyframe,
} from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";
import { isMobile } from "react-device-detect";

import Outside from "./components/Outside";
import Space from "./components/Space";
import Lighting from "./components/Lighting";
import { CanvasProps } from "react-three-fiber";
import { keyframes } from "./assets/constants";

type LinkTreeProps = {
  linkData: {
    link: string;
    desc: string;
    src: string;
  }[];
  socials?: {
    instagram?: string;
    twitter?: string;
    web?: string;
  };
  floorColor?: string;
  sunPos?: number;
  night?: boolean;
  stars?: boolean;
  textColor?: string;
  font?: string;
  fogColor?: string;
  fogFar?: number;
  fogNear?: number;
  radius?: number;
  map?: string;
  scenePos?: [number, number, number];
  hMapScale?: number;
  xzMapScale?: number;
  far?: number;
};

const LinkTreeSpace = (props: LinkTreeProps) => {
  const {
    linkData,
    socials,
    floorColor = 0xbbbbbb,
    sunPos = 1,
    night,
    stars,
    textColor,
    font,
    fogColor,
    fogFar = 50,
    fogNear = 3,
    radius = 10,
    map,
    scenePos = [0, -1, 0],
    hMapScale,
    xzMapScale,
    far = 1000,
  } = props;

  const fColor = new THREE.Color(fogColor);

  const Environment = (props: {
    children: React.ReactNode;
    keyframes: Keyframe[];
    canvasProps: Partial<CanvasProps>;
  }) => {
    const { keyframes, children, canvasProps } = props;

    if (isMobile) {
      return (
        <KeyframeEnvironment keyframes={keyframes} canvasProps={canvasProps}>
          {children}
        </KeyframeEnvironment>
      );
    } else {
      return (
        <StandardEnvironment canvasProps={canvasProps}>
          {children}
        </StandardEnvironment>
      );
    }
  };

  return (
    <Environment keyframes={keyframes} canvasProps={{ camera: { far } }}>
      <Sky inclination={sunPos} distance={night ? 0 : 1000000} />
      {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
      {fogColor && <Fog color={fColor} near={fogNear} far={fogFar} />}
      <Lighting />
      <Outside
        position={scenePos}
        color={floorColor}
        map={map}
        hScale={hMapScale}
        xzScale={xzMapScale}
      />
      <Space linkData={linkData} socials={socials} />
    </Environment>
  );
};

export default LinkTreeSpace;
