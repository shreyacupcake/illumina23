import React, { useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './ModelViewer.css';

const ModelViewer = () => {
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  const modelRef = useRef();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={gltf.scene} ref={modelRef} />
    </Canvas>
  );
};

export default ModelViewer