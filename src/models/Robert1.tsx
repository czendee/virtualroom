/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { draco } from "drei";
import { ModelProps } from "../types/model";
import { loadModel } from "../services/loader";

type GLTFResult = GLTF & {
  nodes: {
    CUBEROBERT1: THREE.Mesh;
    POSTROBERT1: THREE.Mesh;
  };
  materials: {
    ["MATERIAL.ROBERT.1"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: ModelProps) {
  const { useEnvStore } = props;
  const setLoading = useEnvStore((st) => st.setLoading);
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useLoader<GLTFResult>(
    GLTFLoader,
    "https://d27rt3a60hh1lx.cloudfront.net/content/opening/robert/Robert1/Robert1.glb",
    loadModel(setLoading)
  );
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
