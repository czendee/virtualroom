import { StandardEnvironment, KeyframeEnvironment, Fog, Image } from "spacesvr";
import { Vector3 } from "three";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { isMobile } from "react-device-detect";

// @ts-ignore
import Links from "./components/Links";
import Scene from "./components/Scene";
import Space from "./components/Space";

type WorldProps = {
  linkData: {
    link: string;
    desc: string;
    src: string;
  }[];
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

const World = (props: WorldProps) => {
  const {
    linkData,
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
  const keyframes: any = [];
  let offset = 0;
  for (const link of linkData) {
    keyframes.push({
      label: link.desc,
      position: new Vector3(
        Math.cos(offset) * (radius - 2),
        0,
        Math.sin(offset) * (radius - 2)
      ),
    });
    offset += (2 * Math.PI) / linkData.length;
  }

  return (
    <>
      {isMobile ? (
        <KeyframeEnvironment
          keyframes={keyframes}
          canvasProps={{ camera: { far: far } }}
        >
          <Sky inclination={sunPos} distance={night ? 0 : 1000000} />
          {stars ? (
            <Stars count={5000} factor={100000} radius={5000000} fade />
          ) : (
            <></>
          )}
          {fogColor ? (
            <Fog color={fColor} near={fogNear} far={fogFar} />
          ) : (
            <></>
          )}
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 10, 0]} intensity={0.75} castShadow />
          {/*<Links links={linkData} color={textColor} font={font} radius={radius}/>*/}
          {/*<mesh position={[0, -1, 0]}>*/}
          {/*  <boxBufferGeometry attach="geometry" args={[10, 10, 10]} />*/}
          {/*  <meshStandardMaterial attach="material" color="yellow" />*/}
          {/*</mesh>*/}
          <Suspense fallback={null}>
            <Scene
              position={scenePos}
              color={floorColor}
              map={map}
              hScale={hMapScale}
              xzScale={xzMapScale}
            />
            <Space scale={20} linkData={linkData} />
          </Suspense>
        </KeyframeEnvironment>
      ) : (
        <StandardEnvironment canvasProps={{ camera: { far: far } }}>
          <Sky inclination={sunPos} distance={night ? 0 : 1000000} />
          {stars ? (
            <Stars count={5000} factor={100000} radius={5000000} fade />
          ) : (
            <></>
          )}
          {fogColor ? (
            <Fog color={fColor} near={fogNear} far={fogFar} />
          ) : (
            <></>
          )}
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 10, 0]} intensity={0.5} castShadow />
          <pointLight position={[-15, 10, 20]} intensity={0.5} castShadow />

          <group>
            <mesh position={[0, -1, 0]}>
              <boxBufferGeometry attach="geometry" args={[0.25, 0.25, 0.25]} />
              <meshStandardMaterial attach="material" color="white" />
            </mesh>
            <mesh position={[7, -1, 0]}>
              <boxBufferGeometry attach="geometry" args={[0.25, 0.25, 0.25]} />
              <meshStandardMaterial attach="material" color="red" />
            </mesh>
            <mesh position={[-7, -1, 0]}>
              <boxBufferGeometry attach="geometry" args={[0.25, 0.25, 0.25]} />
              <meshStandardMaterial attach="material" color="yellow" />
            </mesh>
            <mesh position={[0, -1, 7]}>
              <boxBufferGeometry attach="geometry" args={[0.25, 0.25, 0.25]} />
              <meshStandardMaterial attach="material" color="green" />
            </mesh>
            <mesh position={[0, -1, -7]}>
              <boxBufferGeometry attach="geometry" args={[0.25, 0.25, 0.25]} />
              <meshStandardMaterial attach="material" color="blue" />
            </mesh>
          </group>
          <Suspense fallback={null}>
            <Scene
              position={scenePos}
              color={floorColor}
              map={map}
              hScale={hMapScale}
              xzScale={xzMapScale}
            />
            <Space scale={20} linkData={linkData} />
          </Suspense>
        </StandardEnvironment>
      )}
    </>
  );
};

export default World;
