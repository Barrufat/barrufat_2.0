import { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function GadjetModel({ props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/barruGadjet2.gltf");
  const { actions } = useAnimations(animations, group);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const activateFirst = () => {
    console.log(actions);
    actions["Cube.012Action.002"].play();
  };

  const activateSecond = () => {
    console.log(actions);
    actions["Cube.008Action.001"].play();
  };

  const activateThird = () => {
    console.log(actions);
    actions["Cube.007Action.001"].play();
  };

  const activateFourth = () => {
    console.log(actions);
    actions["Cube.005Action.001"].play();
  };

  const activateFifth = () => {
    console.log(actions);
    actions["Cube.002Action.001"].play();
  };

  const activateGadjet = () => {
    console.log(actions);
    actions["Cube.002Action.001"].play();
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Base"
          geometry={nodes.Base.geometry}
          material={materials["Material.007"]}
          position={[0, 0.13, -0.01]}
          scale={[1, 0.12, 1]}
        />
        <mesh
          name="Boton1"
          onClick={activateFourth}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          geometry={nodes.Boton1.geometry}
          material={materials["Material.003"]}
          position={[-1.43, 0.97, -0.01]}
          scale={[0.85, 0.83, 0.85]}
        />
        <mesh
          name="Boton2"
          onClick={activateFirst}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          geometry={nodes.Boton2.geometry}
          material={materials["Material.003"]}
          position={[0, 0.45, -0.73]}
          scale={[0.85, 0.83, 0.36]}
        />
        <mesh
          name="Cruz1"
          onClick={activateSecond}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          geometry={nodes.Cruz1.geometry}
          material={materials["Material.003"]}
          position={[0, 0.97, 3.67]}
          scale={[0.85, 0.83, 0.85]}
        />
        <mesh
          name="Cruz2"
          geometry={nodes.Cruz2.geometry}
          material={materials["Material.006"]}
          position={[2.65, 0.97, -0.01]}
          scale={[0.85, 0.83, 0.85]}
        />
        <mesh
          name="Cruz3"
          geometry={nodes.Cruz3.geometry}
          material={materials["Material.003"]}
          position={[0, 0.97, 4.88]}
          scale={[0.85, 0.83, 0.85]}
        />
        <mesh
          name="Nucleo"
          geometry={nodes.Nucleo.geometry}
          material={materials["Material.002"]}
          position={[-0.2, 1.02, 0.03]}
          scale={[0.42, 0.73, 0.68]}
        />
        <mesh
          name="Palo1"
          geometry={nodes.Palo1.geometry}
          material={materials["Material.005"]}
          position={[0, 0.22, -0.01]}
          scale={[0.91, 0.016, 0.91]}
        />
        <mesh
          name="Palo2"
          geometry={nodes.Palo2.geometry}
          material={materials["Material.005"]}
          position={[0, 0.22, -0.01]}
          scale={[0.91, 0.016, 0.91]}
        />
        <mesh
          name="Palo3"
          geometry={nodes.Palo3.geometry}
          material={materials["Material.005"]}
          position={[0, 0.22, -0.01]}
          scale={[0.91, 0.016, 0.91]}
        />
        <mesh
          name="Palo4"
          geometry={nodes.Palo4.geometry}
          material={materials["Material.005"]}
          position={[0, 0.22, -0.01]}
          scale={[0.91, 0.016, 0.91]}
        />
        <mesh
          name="Pieza1"
          geometry={nodes.Pieza1.geometry}
          material={materials["Material.006"]}
          position={[-1.5, 0.97, -0.01]}
          scale={[0.85, 0.83, 0.85]}
        />
        <mesh
          name="Pieza2"
          onClick={activateThird}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          geometry={nodes.Pieza2.geometry}
          material={materials["Material.003"]}
          position={[0, 0.97, -1.58]}
          scale={[0.85, 0.83, 0.85]}
        />
        <mesh
          name="Pieza3"
          geometry={nodes.Pieza3.geometry}
          material={materials["Material.006"]}
          position={[2.25, 0.97, 0.04]}
          scale={[0.85, 0.83, 0.85]}
        />
        <mesh
          onClick={activateFifth}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          name="Tapa"
          geometry={nodes.Tapa.geometry}
          material={materials["Material.007"]}
          position={[0, 1.8, -0.01]}
          rotation={[0, 0, Math.PI]}
          scale={[1, 0.12, 1]}
        />
        <group
          onClick={activateGadjet}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials["Material.008"]}
            position={[-0.91, 1.62, -0.01]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.45, 0.55, 0.4]}
          />
          <mesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={materials.Material}
            position={[-0.89, 1.62, -0.01]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.45, 0.55, 0.4]}
          />
          <mesh
            name="Plane002"
            geometry={nodes.Plane002.geometry}
            material={materials["Material.001"]}
            position={[-0.92, 1.62, -0.01]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.45, 0.55, 0.4]}
          />
          <mesh
            name="Plane003"
            geometry={nodes.Plane003.geometry}
            material={materials["Material.001"]}
            position={[-0.88, 1.62, -0.01]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.45, 0.55, 0.4]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/barruGadjet2.gltf");
