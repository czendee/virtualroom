import { Text, useMatcapTexture } from "@react-three/drei";
import { Vector3 } from "three";
import { Interactable, Image } from "spacesvr";

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

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <group position={position} rotation={[0, rotY, 0]}>
      <Interactable onClick={handleClick}>
        <Image src={src} ratio={[1, 1]} sizeScale={5} framed />
      </Interactable>
      <Text color={color} fontSize={0.4} position-y={-2.5}>
        {text}
      </Text>
    </group>
  );
};

export default Link;
