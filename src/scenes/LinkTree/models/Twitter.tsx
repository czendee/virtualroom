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
    twittericon: THREE.Mesh;
    twitterbutton: THREE.Mesh;
    twitterbase: THREE.Mesh;
  };
  materials: {
    ["twitter.icon"]: THREE.MeshStandardMaterial;
    ["twitter.button"]: THREE.MeshStandardMaterial;
    ["twitter.base"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/twitter-1607643758/twitter.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="twittericon"
          material={materials["twitter.icon"]}
          geometry={nodes.twittericon.geometry}
        />
        <mesh
          name="twitterbutton"
          material={materials["twitter.button"]}
          geometry={nodes.twitterbutton.geometry}
        />
        <mesh
          name="twitterbase"
          material={materials["twitter.base"]}
          geometry={nodes.twitterbase.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
