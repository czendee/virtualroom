import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import { ReactText } from "react";

type SceneProps = {
  color?: string | ReactText;
  wSegments?: number;
  hSegments?: number;
  position?: [number, number, number];
  map?: string;
  hScale?: number;
  xzScale?: number;
};

const Scene = (props: SceneProps) => {
  const {
    color,
    wSegments = 1000,
    hSegments = 1000,
    position = [0, 0, 0],
    map = "mountain",
    hScale = 10,
    xzScale = 1000,
  } = props;
  const mountain = useLoader(THREE.TextureLoader, "/assets/TERRAIN-2.jpg");
  const valley = useLoader(THREE.TextureLoader, "/assets/valley.jpg");
  const canyon = useLoader(THREE.TextureLoader, "/assets/canyon.jpg");
  const city = useLoader(THREE.TextureLoader, "/assets/city.jpg");
  const emissiveMap = useLoader(THREE.TextureLoader, "../assets/gradient2.jpg");

  return (
    <group position={position} rotation-x={-Math.PI / 2} scale={[10, 10, 10]}>
      <mesh receiveShadow>
        <planeBufferGeometry args={[xzScale, xzScale, wSegments, hSegments]} />
        <meshStandardMaterial
          color={color}
          transparent
          displacementMap={
            map === "mountain"
              ? mountain
              : map === "valley"
              ? valley
              : map === "canyon"
              ? canyon
              : map === "city"
              ? city
              : mountain
          }
          displacementScale={hScale}
          alphaMap={
            map === "mountain"
              ? mountain
              : map === "valley"
              ? valley
              : map === "canyon"
              ? canyon
              : map === "city"
              ? city
              : mountain
          }
          emissiveMap={emissiveMap}
          emissive={new THREE.Color(0x800080)}
          emissiveIntensity={3}
        />
      </mesh>
    </group>
  );
};

export default Scene;
