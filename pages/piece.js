import React, { useRef, useState, Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

const Piece = (props) => {
  const { nodes } = useLoader(GLTFLoader, "glb/piece.glb");

  console.log(nodes);

  return (
    <group>
      <mesh visible geometry={nodes.piece1.geometry} />
      <mesh visible geometry={nodes.mesh_0.geometry} />
      <mesh visible geometry={nodes.mesh_1.geometry} />
    </group>
  );
};

const BirdsPage = () => {
  return [
    <Canvas style={{ background: "#171717" }}>
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Loading />}>
        <Piece />
      </Suspense>
    </Canvas>,
  ];
};

export default BirdsPage;
