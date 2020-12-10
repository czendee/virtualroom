import Structure_00 from "../models/Structure_00";
import { Text } from "spacesvr";
import Links from "./Links";

type SpaceProps = {
  linkData: {
    link: string;
    desc: string;
    src: string;
  }[];
  scale?: number;
  position?: [number, number, number];
};

const Space = (props: SpaceProps) => {
  const { scale = 1, position = [0, 0, 0], linkData } = props;
  const defaultScale = 20;
  return (
    <group scale={[scale, scale, scale]} position={position}>
      <Structure_00 />
      <Links links={linkData} offset={scale} />
      <Text
        text="Muse"
        rotation={[0, -Math.PI / 2, 0]}
        position={[0.55, 0.2, 0.75]}
        size={1.5}
        color="red"
      />
    </group>
  );
};

export default Space;
