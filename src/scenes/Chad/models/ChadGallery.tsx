/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import { loadModel } from "services/loader";
import { useTrimeshCollision } from "@spacesvr/services/collision";
import { BufferGeometry } from "three";
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    COLLIDERS: THREE.Mesh;
    SPAWNBOXRAIL: THREE.Mesh;
    SPAWNBOX: THREE.Mesh;
    HALLWAY: THREE.Mesh;
    LEVEL3: THREE.Mesh;
    LEVEL2: THREE.Mesh;
    LEVEL1: THREE.Mesh;
    LEVEL3RAIL1: THREE.Mesh;
    LEVEL3RAIL2: THREE.Mesh;
    STAIR1: THREE.Mesh;
    STAIR2: THREE.Mesh;
    LEVEL2RAIL1: THREE.Mesh;
    LEVEL2RAIL2: THREE.Mesh;
    STAIR3: THREE.Mesh;
    STAIR4: THREE.Mesh;
    LEVEL1RAIL1: THREE.Mesh;
    LEVEL1RAIL2: THREE.Mesh;
  };
  materials: {
    WHITE2: THREE.MeshStandardMaterial;
    BLACK: THREE.MeshStandardMaterial;
    WHITE: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/ChadGallery18/ChadGallery18.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  useEffect(() => {
    if (group.current) {
      group.current.traverse((obj) => (obj.frustumCulled = false));
    }
  }, []);

  useTrimeshCollision(
    (nodes.COLLIDERS.geometry as BufferGeometry)
      .clone()
      .translate(0, -0.005, 0)
      .scale(80, 80, 80)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[80, 80, 80]}>
        <group position={[0, -0.005, 0]}>
          <mesh
            material={materials.WHITE2}
            geometry={nodes.SPAWNBOXRAIL.geometry}
          />
          <mesh
            material={materials.WHITE2}
            geometry={nodes.SPAWNBOX.geometry}
          />
          <mesh
            material={materials.BLACK}
            geometry={nodes.HALLWAY.geometry}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh material={materials.BLACK} geometry={nodes.LEVEL3.geometry} />
          <mesh material={materials.BLACK} geometry={nodes.LEVEL2.geometry} />
          <mesh material={materials.BLACK} geometry={nodes.LEVEL1.geometry} />
          <mesh
            material={materials.WHITE}
            geometry={nodes.LEVEL3RAIL1.geometry}
          />
          <mesh
            material={materials.WHITE}
            geometry={nodes.LEVEL3RAIL2.geometry}
          />
          <mesh material={materials.WHITE} geometry={nodes.STAIR1.geometry} />
          <mesh material={materials.WHITE} geometry={nodes.STAIR2.geometry} />
          <mesh
            material={materials.WHITE}
            geometry={nodes.LEVEL2RAIL1.geometry}
          />
          <mesh
            material={materials.WHITE}
            geometry={nodes.LEVEL2RAIL2.geometry}
          />
          <mesh material={materials.WHITE} geometry={nodes.STAIR3.geometry} />
          <mesh material={materials.WHITE} geometry={nodes.STAIR4.geometry} />
          <mesh
            material={materials.WHITE}
            geometry={nodes.LEVEL1RAIL1.geometry}
          />
          <mesh
            material={materials.WHITE}
            geometry={nodes.LEVEL1RAIL2.geometry}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);