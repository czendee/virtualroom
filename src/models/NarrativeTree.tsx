/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { loadModel } from "../services/loader";
import { ModelProps } from "../types/model";
import { GRAY } from "../scenes/Narrative/components/Colors";

type GLTFResult = GLTF & {
  nodes: {
    Line01: THREE.Mesh;
  };
  materials: {
    Material__22: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: ModelProps) {
  const { useEnvStore } = props;

  const setLoading = useEnvStore((st) => st.setLoading);
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useLoader<GLTFResult>(
    GLTFLoader,
    "https://d27rt3a60hh1lx.cloudfront.net/models/NarrativeTree/NarrativeTree.glb",
    loadModel(setLoading)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.7, 0.7, 0.7]}>
        <mesh geometry={nodes.Line01.geometry} castShadow>
          <meshBasicMaterial color={GRAY} attach="material" />
        </mesh>
      </group>
    </group>
  );
}
