import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GadjetModel from "./GadjetModel";
import GadjetModelStyled from "./GadjetModelStyled";
import { useAppSelector } from "../../store/hooks";

const Gadjet = () => {
  const isLightThemeActive = useAppSelector(
    (state) => state.uiState.isThemeLight
  );

  return (
    <>
      <img
        id="hero"
        className="section__hero-image"
        src={isLightThemeActive ? "./lightHexagon1.svg" : "./hexagon1.svg"}
        alt="bg-hexagon"
        width="100"
        height="50"
      />
      <GadjetModelStyled>
        <Canvas className="gadjet__wrapper">
          <OrbitControls enableZoom={false} autoRotate={true} />
          <directionalLight position={[-10, 20, -20]} intensity={2} />
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <GadjetModel />
          </Suspense>
        </Canvas>
      </GadjetModelStyled>
    </>
  );
};

export default Gadjet;
