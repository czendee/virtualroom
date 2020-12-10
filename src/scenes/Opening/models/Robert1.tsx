/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import { useRef } from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import { DRACO_URL } from "spacesvr/services/constants";

type GLTFResult = GLTF & {
  nodes: {
    CUBEROBERT1: THREE.Mesh;
    POSTROBERT1: THREE.Mesh;
  };
  materials: {
    ["MATERIAL.ROBERT.1"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/content/opening/robert/Robert1/Robert1.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.020403, -0.010631, 0]} scale={[0.6, 0.6, 0.6]}>
        <mesh
          material={materials["MATERIAL.ROBERT.1"]}
          geometry={nodes.CUBEROBERT1.geometry}
          position={[-0.000227, 0.00938, 0]}
        />
        <mesh
          material={materials["MATERIAL.ROBERT.1"]}
          geometry={nodes.POSTROBERT1.geometry}
          position={[0.000227, -0.00938, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
