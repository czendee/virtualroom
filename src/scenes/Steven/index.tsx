import { useAnalytics } from "services/analytics";
import { StandardEnvironment, Background, Fog, Image } from "spacesvr";
import { Vector3 } from "three";
import DisplacementMap from "./components/DisplacementMap";
import Structure from "./models/structure_00";
import * as THREE from "three";

const Starter = () => {
  useAnalytics();

  const INITIAL_POSITION = new Vector3(0, 1, 4);

  return (
    <StandardEnvironment player={{ pos: INITIAL_POSITION }}>
      <Background color={0x000000} />
      <ambientLight intensity={1} />
      <pointLight intensity={2} position={[0.5, 0.5, 0]} />
      <DisplacementMap />
      <Fog color={new THREE.Color(0x000000)} near={0} far={200} />
      <Structure />
      <Image
        position={[-5.5, 3, 1]}
        rotation-y={-Math.PI / 2}
        src="/assets/02.jpg"
        ratio={[300, 300]}
        sizeScale={10}
        framed
      />
      <Image
        position={[-6.5, 3, 1]}
        rotation-y={Math.PI / 2}
        src="/assets/02.jpg"
        ratio={[300, 300]}
        sizeScale={10}
        framed
      />
      <Image
        position={[-5.5, 3, 17]}
        rotation-y={-Math.PI / 2}
        src="/assets/02.jpg"
        ratio={[300, 300]}
        sizeScale={10}
        framed
      />
      <Image
        position={[-6.5, 3, 17]}
        rotation-y={Math.PI / 2}
        src="/assets/02.jpg"
        ratio={[300, 300]}
        sizeScale={10}
        framed
      />
      <Image
        position={[-5.5, 3, 33]}
        rotation-y={-Math.PI / 2}
        src="/assets/02.jpg"
        ratio={[300, 300]}
        sizeScale={10}
        framed
      />
      <Image
        position={[-6.5, 3, 33]}
        rotation-y={Math.PI / 2}
        src="/assets/02.jpg"
        ratio={[300, 300]}
        sizeScale={10}
        framed
      />
    </StandardEnvironment>
  );
};

export default Starter;
