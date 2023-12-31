import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GadjetModel from "./GadjetModel";
import GadjetModelStyled from "./GadjetModelStyled";

const Gadjet = () => {
  return (
    <GadjetModelStyled id="hero">
      <img src="./hexagon1.svg" alt="bg-hexagon" width="100%" height="auto" />
      <Canvas style={{ width: "100%", height: "180vw", marginTop: "-20vh" }}>
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
