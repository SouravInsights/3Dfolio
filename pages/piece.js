import React, { useRef, useState, useEffect, Suspense } from "react";
import {
  Canvas,
  useLoader,
  extend,
  useThree,
  useFrame,
} from "react-three-fiber";
/* import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; */
/* import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; */

let GLTFLoader;
let OrbitControls;

const Controls = () => {
  OrbitControls = require("three/examples/jsm/controls/OrbitControls")
    .OrbitControls;
  extend({ OrbitControls });
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />;
};

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial attach="material" roughness={1} metalness={0} />
    </mesh>
  );
}

const Piece = (props) => {
  GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader").GLTFLoader;
  const [model, setModel] = useState();

  const gltf = useLoader(GLTFLoader, "glb/scene.gltf");

  console.log(gltf);
  return gltf ? <primitive object={gltf.scene} /> : null;
};

const Models = () => {
  return [
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight />
      <spotLight castShadow penumbra={1} position={[0, 5, 10]} />
      <Controls />
      <Suspense fallback={<Loading />}>
        <Piece />
      </Suspense>
    </Canvas>,
  ];
};

export default Models;
