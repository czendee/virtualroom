import Structure_00 from "../models/Structure_00";
import CodameCollisions from "../models/CodameCollisions";
import { Text } from "spacesvr";
import Links from "./Links";

type SpaceProps = {
  linkData: {
    link: string;
    desc: string;
    src: string;
  }[];
  position?: [number, number, number];
};

const Space = (props: SpaceProps) => {
  const { position = [0, 0, 0], linkData } = props;

  return (
    <group scale={[5, 5, 5]} position={position}>
      <Structure_00 position-y={0.1155} />
      <CodameCollisions />
      <Links links={linkData} />
      <Text
        text="Muse x Codame"
        rotation={[0, -Math.PI / 2, 0]}
        position={[0.56, 0.2, 0.75]}
        size={1}
        color="red"
      />
      <Text
        text="Artist Name"
        rotation={[0, Math.PI / 2, 0]}
        position={[-1.16, 0.2, 0.75]}
        size={1}
        color="red"
      />
    </group>
  );
};

export default Space;
