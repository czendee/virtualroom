/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL } from "spacesvr/services/constants";

type GLTFResult = GLTF & {
  nodes: {
    webicon: THREE.Mesh;
    webbutton: THREE.Mesh;
    webbase: THREE.Mesh;
  };
  materials: {
    ["web.icon"]: THREE.MeshStandardMaterial;
    ["web.button"]: THREE.MeshStandardMaterial;
    ["web.base"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/web-1607643809/web.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="webicon"
          material={materials["web.icon"]}
          geometry={nodes.webicon.geometry}
        />
        <mesh
          name="webbutton"
          material={materials["web.button"]}
          geometry={nodes.webbutton.geometry}
        />
        <mesh
          name="webbase"
          material={materials["web.base"]}
          geometry={nodes.webbase.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
