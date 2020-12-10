import Structure_00 from "../models/Structure_00";
import { Text } from "spacesvr";

type SpaceProps = {
  linkData: {
    link: string;
    desc: string;
    asset: string;
  }[];
  scale?: number;
  position?: [number, number, number];
  art?: {
    name?: string;
    model?: JSX.Element;
    index?: number;
  }[];
};

const Space = (props: SpaceProps) => {
  const { scale = 1, position = [0, 0, 0], linkData } = props;
  return (
    <group scale={[scale, scale, scale]} position={position}>
      <Structure_00 />
      <Text
        text="Muse"
        rotation={[0, -Math.PI / 2, 0]}
        position={[0.6, 0.2, 0.75]}
        color="red"
      />
    </group>
  );
};

export default Space;
