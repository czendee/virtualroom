import { Text, useMatcapTexture } from "@react-three/drei";
import { Vector3 } from "three";
import { Interactable } from "spacesvr";
import * as THREE from "three";

type LinkProps = {
  link: string;
  position: Vector3 | [number, number, number];
  rotY?: number;
  text?: string;
  color?: string;
  font?: string;
};

const Link = (props: LinkProps) => {
  const { link, position, rotY = 0, text = "", color = "white", font } = props;
  const [matcap] = useMatcapTexture("6D1616_E6CDBA_DE2B24_230F0F");
  const handleClick = () => {
    window.open(link);
  };

  return (
    <group position={position} rotation={[0, rotY, 0]}>
      <Interactable onClick={handleClick}>
        <mesh position={[0, 1, 0]} castShadow>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshMatcapMaterial matcap={matcap as THREE.Texture} />
        </mesh>
      </Interactable>
      <Text color={color} fontSize={1}>
        {text}
      </Text>
    </group>
  );
};

export default Link;
