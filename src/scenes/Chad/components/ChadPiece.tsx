import React, { Suspense, useRef, useMemo } from "react";
import { EnvironmentStoreHook } from "stores/environment";
import { Color, Mesh } from "three";
import ChadKnight from "models/ChadKnight";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

type ChadKnightProps = {
  useEnvStore: EnvironmentStoreHook;
};

const SCALE = 1.8;

const ChadKnightPieces = (props: ChadKnightProps) => {
  const { useEnvStore } = props;

  const sphere = useRef<Mesh>();

  useFrame(({ clock }) => {
    if (sphere.current) {
      sphere.current.rotation.y = clock.getElapsedTime() / 10;
    }
  });

  return (
    <group>
      <group scale={[SCALE, SCALE, SCALE]}>
        <Suspense fallback={null}>
          <ChadKnight useEnvStore={useEnvStore} />
        </Suspense>
        <mesh ref={sphere}>
          <sphereBufferGeometry attach="geometry" args={[8, 50, 30]} />
          <meshStandardMaterial
            attach="material"
            wireframe
            color={new Color(0x008080)}
          />
        </mesh>
      </group>
    </group>
  );
};

export default ChadKnightPieces;