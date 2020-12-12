import { useMemo } from "react";
import { SpotLight } from "three";

const Lighting = (props: JSX.IntrinsicElements["group"]) => {
  const spotLight1 = useMemo(() => new SpotLight(), []);
  const spotLight2 = useMemo(() => new SpotLight(), []);
  const spotLight3 = useMemo(() => new SpotLight(), []);
  const spotLight4 = useMemo(() => new SpotLight(), []);

  const attrs = {
    penumbra: 0.8,
    intensity: 0.9,
    color: "#74148c",
  };

  return (
    <group {...props}>
      <ambientLight intensity={0.6} />
      <group position={[-4, 2, 10]}>
        <primitive object={spotLight1} {...attrs} />
        <primitive object={spotLight1.target} position={[0, 0.1, -1]} />
      </group>
      <group position={[4, 2, 10]}>
        <primitive object={spotLight2} {...attrs} />
        <primitive object={spotLight2.target} position={[0, -0.1, -1]} />
      </group>
      <group position={[4, 2, -10]}>
        <primitive object={spotLight3} {...attrs} />
        <primitive object={spotLight3.target} position={[0, 0.1, 1]} />
      </group>
      <group position={[-4, 2, -10]}>
        <primitive object={spotLight4} {...attrs} />
        <primitive object={spotLight4.target} position={[0, -0.1, 1]} />
      </group>
    </group>
  );
};

export default Lighting;
