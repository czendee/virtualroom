/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { draco } from "drei";
import { loadModel } from "../services/loader";
import { ModelProps } from "../types/model";

type GLTFResult = GLTF & {
  nodes: {
    CUBESANTI: THREE.Mesh;
    POSTSANTI2: THREE.Mesh;
    POSTSANTI1: THREE.Mesh;
    CUBEDENNIS: THREE.Mesh;
    POSTDENNIS2: THREE.Mesh;
    POSTDENNIS1: THREE.Mesh;
    CUBEZACH: THREE.Mesh;
    POSTZACH2: THREE.Mesh;
    POSTZACH1: THREE.Mesh;
    CUBEHECTOR: THREE.Mesh;
    POSTHECTOR2: THREE.Mesh;
    POSTHECTOR1: THREE.Mesh;
    CUBEJUSTIN: THREE.Mesh;
    POSTJUSTIN: THREE.Mesh;
    CUBEROBERT: THREE.Mesh;
    POSTROBERT: THREE.Mesh;
  };
  materials: {
    ["POST.SANTI"]: THREE.MeshStandardMaterial;
    ["MATERIAL.DENNIS"]: THREE.MeshStandardMaterial;
    ["MATERIAL.ZACH"]: THREE.MeshStandardMaterial;
    ["MATERIAL.HECTOR"]: THREE.MeshStandardMaterial;
    ["MATERIAL.JUSTIN"]: THREE.MeshStandardMaterial;
    ["MATERIAL.ROBERT"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: ModelProps) {
  const { useEnvStore } = props;
  const setLoading = useEnvStore((st) => st.setLoading);
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useLoader<GLTFResult>(
    GLTFLoader,
    "https://d27rt3a60hh1lx.cloudfront.net/models/SpacesPlaques6/SpacesPlaques6.glb",
    loadModel(setLoading)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        scale={[100, 100, 100]}
        position={[0, 0.5, 0]}
        rotation={[0, Math.PI, 0]}
      >
        <group
          position={[-0.120446, 0.0025, 0.126275]}
          rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          scale={[0.6, 0.6, 0.6]}
        >
          <mesh
            material={materials["POST.SANTI"]}
            geometry={nodes.CUBESANTI.geometry}
            position={[-0.000093, 0.012507, 0]}
          />
          <mesh
            material={materials["POST.SANTI"]}
            geometry={nodes.POSTSANTI2.geometry}
            position={[0.023361, -0.006253, 0]}
          />
          <mesh
            material={materials["POST.SANTI"]}
            geometry={nodes.POSTSANTI1.geometry}
            position={[-0.023268, -0.006253, 0]}
          />
        </group>
        <group
          position={[-0.167126, 0.0025, -0.05205]}
          rotation={[0, Math.PI / 3, 0]}
          scale={[0.6, 0.6, 0.6]}
        >
          <mesh
            material={materials["MATERIAL.DENNIS"]}
            geometry={nodes.CUBEDENNIS.geometry}
            position={[-0.001059, 0.012507, 0]}
          />
          <mesh
            material={materials["MATERIAL.DENNIS"]}
            geometry={nodes.POSTDENNIS2.geometry}
            position={[0.024529, -0.006253, 0]}
          />
          <mesh
            material={materials["MATERIAL.DENNIS"]}
            geometry={nodes.POSTDENNIS1.geometry}
            position={[-0.023471, -0.006253, 0]}
          />
        </group>
        <group position={[-0.045298, 0.0025, -0.17052]} scale={[0.6, 0.6, 0.6]}>
          <mesh
            material={materials["MATERIAL.ZACH"]}
            geometry={nodes.CUBEZACH.geometry}
            position={[-0.000093, 0.012507, 0]}
          />
          <mesh
            material={materials["MATERIAL.ZACH"]}
            geometry={nodes.POSTZACH2.geometry}
            position={[0.023361, -0.006253, 0]}
          />
          <mesh
            material={materials["MATERIAL.ZACH"]}
            geometry={nodes.POSTZACH1.geometry}
            position={[-0.023268, -0.006253, 0]}
          />
        </group>
        <group
          position={[0.124688, 0.0025, -0.122112]}
          rotation={[0, -Math.PI / 3, 0]}
          scale={[0.6, 0.6, 0.6]}
        >
          <mesh
            material={materials["MATERIAL.HECTOR"]}
            geometry={nodes.CUBEHECTOR.geometry}
            position={[-0.001059, 0.012507, 0]}
          />
          <mesh
            material={materials["MATERIAL.HECTOR"]}
            geometry={nodes.POSTHECTOR2.geometry}
            position={[0.024529, -0.006253, 0]}
          />
          <mesh
            material={materials["MATERIAL.HECTOR"]}
            geometry={nodes.POSTHECTOR1.geometry}
            position={[-0.023471, -0.006253, 0]}
          />
        </group>
        <group
          position={[0.054235, 0.0025, 0.170179]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.6, 0.6, 0.6]}
        >
          <mesh
            material={materials["MATERIAL.JUSTIN"]}
            geometry={nodes.CUBEJUSTIN.geometry}
            position={[-0.000727, 0.00938, 0]}
          />
          <mesh
            material={materials["MATERIAL.JUSTIN"]}
            geometry={nodes.POSTJUSTIN.geometry}
            position={[0.000727, -0.00938, 0]}
          />
        </group>
        <group
          position={[0.170903, 0.0025, 0.04266]}
          rotation={[Math.PI, -Math.PI / 3, Math.PI]}
          scale={[0.6, 0.6, 0.6]}
        >
          <mesh
            material={materials["MATERIAL.ROBERT"]}
            geometry={nodes.CUBEROBERT.geometry}
            position={[-0.000727, 0.00938, 0]}
          />
          <mesh
            material={materials["MATERIAL.ROBERT"]}
            geometry={nodes.POSTROBERT.geometry}
            position={[0.000727, -0.00938, 0]}
          />
        </group>
      </group>
    </group>
  );
}
