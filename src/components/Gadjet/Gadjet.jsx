/* eslint-disable jsx-a11y/media-has-caption */
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useVideoPlayer from "../VideoPlayer/VideoPlayer";
import GadjetModel from "./GadjetModel";
import GadjetModelStyled from "./GadjetModelStyled";

const Gadjet = () => {
  const videoElement = useRef(null);

  const { playerState, togglePlay, handleOnTimeUpdate } =
    useVideoPlayer(videoElement);

  const [audioSrc, setAudioSrc] = useState("./GadjetSound1.mp3");

  useEffect(() => {
    if (playerState.progress === 100) {
      togglePlay();
    }
  }, [playerState, togglePlay]);

  return (
    <GadjetModelStyled>
      <video
        style={{ width: "0" }}
        src={audioSrc}
        ref={videoElement}
        onTimeUpdate={handleOnTimeUpdate}
      />
      <Canvas style={{ width: "100%", height: "90vh" }}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <directionalLight position={[-10, 20, -20]} intensity={2} />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <GadjetModel />
        </Suspense>
      </Canvas>
    </GadjetModelStyled>
  );
};

export default Gadjet;
