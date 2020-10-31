import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";
import { Color, Group, Raycaster, Vector2 } from "three";
import CrazyMaterial from "../../scenes/Wolves/shaders/crazy";

type ImageProps = JSX.IntrinsicElements["group"] & {
  src: string;
  ratio: [number, number];
  sizeScale: number;
  framed?: boolean;
  link?: string;
  raycaster?: React.MutableRefObject<Raycaster>;
  paused?: boolean;
  color?: Color;
};

const frameWidth = 0.3;
const frameDepth = 0.1;
const borderThickness = 0.2;
const borderDepth = 0.2;
const meshOffset = 0.0005;

const Image = (props: ImageProps) => {
  const {
    src,
    sizeScale,
    ratio,
    framed,
    link,
    raycaster,
    paused = false,
    color = 0x111111,
  } = props;

  const texture = useLoader(THREE.TextureLoader, src);
  const group = useRef<Group>();
  const image = useRef<THREE.Mesh>();

  // sizing
  const normalizedRatio = new Vector2(ratio[0], ratio[1]).normalize();
  const width = normalizedRatio.x * sizeScale;
  const height = normalizedRatio.y * sizeScale;

  // const material = useMemo(
  //   () =>
  //     new THREE.MeshStandardMaterial({
  //       color: color,
  //       roughness: 0.8,
  //       metalness: 0.05,
  //     }),
  //   []
  // );

  const [hovered, setHovered] = useState<boolean>(false);
  const material = useRef(new CrazyMaterial());

  useFrame(({ clock }, delta) => {
    if (image.current) {
      // @ts-ignore
      const intersections = raycaster.current.intersectObject(image.current);
      if (intersections && intersections.length > 0) {
        if (!hovered) {
          setHovered(true);
          console.log("hovered");
        }
      } else {
        if (hovered) {
          setHovered(false);
        }
      }
    }
    if (material?.current) {
      // @ts-ignore
      material.current.time += delta;
    }
  });

  const onClick = useCallback(() => {
    if (hovered) {
      window.open(link);
    }
  }, [hovered]);

  useEffect(() => {
    if (!paused) {
      document.addEventListener("click", onClick);
    }
    return () => {
      document.removeEventListener("click", onClick);
    };
  });

  return (
    <group {...props}>
      <group ref={group}>
        <mesh castShadow ref={image}>
          <planeBufferGeometry attach="geometry" args={[width, height]} />
          <meshStandardMaterial attach="material" map={texture} />
        </mesh>
        {framed && (
          <>
            <mesh position-z={[-0.1 - meshOffset]} material={material.current}>
              <boxBufferGeometry
                attach="geometry"
                args={[width + frameWidth, height + frameWidth, frameDepth]}
              />
            </mesh>
            {/* top */}
            <mesh
              position-y={height / 2 + frameWidth / 2 - borderThickness / 2}
              // material={material}
            >
              <boxBufferGeometry
                attach="geometry"
                args={[width + frameWidth, borderThickness, borderDepth]}
              />
            </mesh>
            {/* bottom */}
            <mesh
              position-y={-height / 2 - frameWidth / 2 + borderThickness / 2}
              // material={material}
            >
              <boxBufferGeometry
                attach="geometry"
                args={[width + frameWidth, borderThickness, borderDepth]}
              />
            </mesh>
            {/* left */}
            <mesh
              position-x={-width / 2 - frameWidth / 2 + borderThickness / 2}
              // material={material}
            >
              <boxBufferGeometry
                attach="geometry"
                args={[borderThickness, height + frameWidth, borderDepth]}
              />
            </mesh>
            {/* right */}
            <mesh
              position-x={width / 2 + frameWidth / 2 - borderThickness / 2}
              // material={material}
            >
              <boxBufferGeometry
                attach="geometry"
                args={[borderThickness, height + frameWidth, borderDepth]}
              />
            </mesh>
          </>
        )}
      </group>
    </group>
  );
};

export default Image;
