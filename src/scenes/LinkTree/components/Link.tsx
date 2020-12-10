import { Text, useMatcapTexture } from "@react-three/drei";
import { Vector3 } from "three";
import { Interactable, Image } from "spacesvr";
import * as THREE from "three";

type LinkProps = {
  link: string;
  position: Vector3 | [number, number, number];
  src: string;
  rotY?: number;
  text?: string;
  color?: string;
  font?: string;
};

const Link = (props: LinkProps) => {
  const {
    link,
    position,
    rotY = 0,
    text = "",
    color = "white",
    src,
    font,
  } = props;
  const [matcap] = useMatcapTexture("6D1616_E6CDBA_DE2B24_230F0F");
  const handleClick = () => {
    window.open(link);
  };

  return (
    <group position={position} rotation={[0, rotY, 0]}>
      <Interactable onClick={handleClick}>
        <Image src={src} ratio={[1, 1]} sizeScale={10} framed />
      </Interactable>
      <Text color={color} fontSize={1} position-y={-4.5}>
        {text}
      </Text>
    </group>
  );
};

export default Link;
