import Structure_00 from "../models/Structure_00";

type SpaceProps = {
  scale?: number;
  position?: [number, number, number];
};

const Space = (props: SpaceProps) => {
  const { scale = 1, position = [0, 0, 0] } = props;
  return (
    <group scale={[scale, scale, scale]} position={position}>
      <Structure_00 />
    </group>
  );
};

export default Space;
