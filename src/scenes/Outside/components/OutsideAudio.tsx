import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useThree } from "react-three-fiber";
import { EnvironmentStoreHook } from "stores/environment";
import { PositionalAudioHelper } from "three/examples/jsm/helpers/PositionalAudioHelper";

type OutsideAudioProps = JSX.IntrinsicElements["group"] & {
  useEnvStore: EnvironmentStoreHook;
  url: string;
};

const OutsideAudio = (props: OutsideAudioProps) => {
  const { useEnvStore, url } = props;

  const paused = useEnvStore((st) => st.paused);

  const container = useEnvStore((st) => st.container);
  const audioRef = useRef<HTMLAudioElement>();
  const speaker = useRef<THREE.PositionalAudio>();
  const { camera, scene } = useThree();
  const listener = useRef<THREE.AudioListener>();

  useEffect(() => {
    if (container?.current && !audioRef.current) {
      const audio = document.createElement("audio");
      audio.src = url;
      audio.autoplay = false;
      audio.preload = "auto";
      audio.crossOrigin = "anonymous";
      audio.loop = true;
      container?.current?.appendChild(audio);

      audioRef.current = audio;

      return () => {
        audio.pause();
        // audio.remove();
        // audioRef.current = undefined;

        if (speaker.current) {
          speaker.current.disconnect();
          speaker.current = undefined;
        }
        if (listener.current) {
          camera.remove(listener.current);
        }
      };
    }
  }, [container?.current, audioRef.current]);

  // audio
  useEffect(() => {
    if (!paused && camera && audioRef.current && !speaker.current) {
      listener.current = new THREE.AudioListener();
      camera.add(listener.current);

      speaker.current = new THREE.PositionalAudio(listener.current);
      speaker.current.setMediaElementSource(audioRef.current);
      speaker.current.position.set(0, 7, 0);
      speaker.current.setRefDistance(0.5);
      speaker.current.setRolloffFactor(1);
      speaker.current.setVolume(7);

      // const helper = new PositionalAudioHelper(speaker.current);
      // speaker.current.add(helper);

      scene.add(speaker.current);
    }
  }, [audioRef.current, camera, speaker.current, listener.current, paused]);

  useEffect(() => {
    if (!paused && audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
    }
  }, [paused, audioRef.current]);

  return <></>;
};

export default OutsideAudio;
