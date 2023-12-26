/* eslint-disable jsx-a11y/media-has-caption */
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useVideoPlayer from "../VideoPlayer/VideoPlayer";
import GadjetModel from "./GadjetModel";

const Gadjet = () => {
  const videoElement = useRef(null);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    // handleVideoProgress,
    // handleVideoSpeed,
    // toggleMute,
  } = useVideoPlayer(videoElement);

  const [audioSrc, setAudioSrc] = useState("./GadjetSound1.mp3");

  const playAudio = (soundTrack) => {
    setAudioSrc(soundTrack);
    togglePlay();
  };

  useEffect(() => {
    if (playerState.progress === 100) {
      togglePlay();
    }
  }, [playerState, togglePlay]);

  return (
    <>
      <video
        style={{ width: "0" }}
        src={audioSrc}
        ref={videoElement}
        onTimeUpdate={handleOnTimeUpdate}
      />

      <div>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight shadow={0.1} intensity={0.65} />
          <pointLight position={[1, 1, 1]} intensity={0.6} />
          <Suspense fallback={null}>
            <GadjetModel />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Gadjet;
