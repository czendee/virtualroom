import React, { Suspense, useMemo } from "react";
import FramedImage from "three-components/FramedImage";
import FramedMutedVideo from "three-components/FramedMutedVideo";
import { EnvironmentStoreHook } from "stores/environment";
import JustinSkull from "models/JustinSkull";
import { SpotLight } from "three";

type JustinProps = {
  useEnvStore: EnvironmentStoreHook;
};

const JustinRoom = (props: JustinProps) => {
  const { useEnvStore } = props;

  const light = useMemo(() => new SpotLight(), []);
  const lightArgs = {
    distance: 8,
    color: 0xffffff,
    intensity: 7,
    angle: Math.PI / 2.4,
    penumbra: 0.1,
  };

  return (
    <group rotation={[0, (Math.PI * 6) / 3, 0]}>
      <group position={[0, 5.5, -42]}>
        <FramedMutedVideo
          src="https://d27rt3a60hh1lx.cloudfront.net/content/opening/justin/skullfloral-final.mp4"
          ratio={[1, 1]}
          sizeScale={6.25}
          rotation={[0, -Math.PI / 3, 0]}
          position={[6, 0, -3]}
          useEnvStore={useEnvStore}
          floating
        />
        <group position={[0, -1, 0]}>
          <Suspense fallback={null}>
            <JustinSkull
              useEnvStore={useEnvStore}
              position={[-4, 0, -4]}
              rotation={[0, Math.PI / 2, 0]}
            />
          </Suspense>
          <group position={[-1, 1, 0]}>
            <primitive object={light} {...lightArgs} />
            <primitive object={light.target} position={[-1, -1, -1]} />
          </group>
        </group>
      </group>
    </group>
  );
};

export default JustinRoom;
