import { useLoader } from "react-three-fiber";
import * as THREE from "three";

const RADIUS = 30;
const HEIGHT = RADIUS + 0.1;
const INNER_RADIUS = RADIUS - 0.001;
const SUBDIVISIONS = 36;

const DisplacementMap = (props: JSX.IntrinsicElements["group"]) => {
  const heightmap = useLoader(THREE.TextureLoader, "/assets/02.jpg");
  const emissiveMap = useLoader(THREE.TextureLoader, "/assets/gradient2.jpg");

  return (
    <group {...props}>
      <group position-y={-30} scale={[5, 5, 5]}>
        <mesh rotation-x={-Math.PI / 2} receiveShadow>
          <planeBufferGeometry
            args={[INNER_RADIUS * 2, INNER_RADIUS * 2, 500, 500]}
          />
          <meshStandardMaterial
            color={0xb6b6b6}
            transparent
            displacementMap={heightmap}
            displacementScale={15}
            alphaMap={heightmap}
            emissiveMap={emissiveMap}
            emissive={new THREE.Color(0x800080)}
            emissiveIntensity={3}
          />
        </mesh>
      </group>
    </group>
  );
};

export default DisplacementMap;
