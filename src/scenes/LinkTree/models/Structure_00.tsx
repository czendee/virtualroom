/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    floor: THREE.Mesh;
    walls: THREE.Mesh;
    celling: THREE.Mesh;
    glass: THREE.Mesh;
    skylight: THREE.Mesh;
    windows: THREE.Mesh;
    beams: THREE.Mesh;
    concrete_walls: THREE.Mesh;
    doors: THREE.Mesh;
    ventmat: THREE.Mesh;
  };
  materials: {
    ["floor.mat"]: THREE.MeshStandardMaterial;
    ["walls.mat"]: THREE.MeshStandardMaterial;
    ["ceiling.mat"]: THREE.MeshStandardMaterial;
    ["glass.mat"]: THREE.MeshStandardMaterial;
    ["skylight.mat"]: THREE.MeshStandardMaterial;
    ["windows.mat"]: THREE.MeshStandardMaterial;
    ["beams.mat"]: THREE.MeshStandardMaterial;
    ["concrete_walls.mat"]: THREE.MeshStandardMaterial;
    ["doors.mat"]: THREE.MeshStandardMaterial;
    ["vent.mat"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/structure0-1607582925/structure_00.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  materials["glass.mat"].metalness = 1;
  materials["glass.mat"].roughness = 0;
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="floor"
          material={materials["floor.mat"]}
          geometry={nodes.floor.geometry}
        />
        <mesh
          name="walls"
          material={materials["walls.mat"]}
          geometry={nodes.walls.geometry}
        />
        <mesh
          name="celling"
          material={materials["ceiling.mat"]}
          geometry={nodes.celling.geometry}
        />
        <mesh
          name="glass"
          material={materials["glass.mat"]}
          geometry={nodes.glass.geometry}
        />
        <mesh
          name="skylight"
          material={materials["skylight.mat"]}
          geometry={nodes.skylight.geometry}
        />
        <mesh
          name="windows"
          material={materials["windows.mat"]}
          geometry={nodes.windows.geometry}
        />
        <mesh
          name="beams"
          material={materials["beams.mat"]}
          geometry={nodes.beams.geometry}
        />
        <mesh
          name="concrete_walls"
          material={materials["concrete_walls.mat"]}
          geometry={nodes.concrete_walls.geometry}
        />
        <mesh
          name="doors"
          material={materials["doors.mat"]}
          geometry={nodes.doors.geometry}
        />
        <mesh
          name="ventmat"
          material={materials["vent.mat"]}
          geometry={nodes.ventmat.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
