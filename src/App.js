import {useState,useRef} from "react";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css';

function Bodyviewer(props) {
  // Use useRef hook to access the mesh element
  const model = useLoader(GLTFLoader, "models/MaleCharBaseMesh.glb");

  const modelRef = useRef();
  const [isRightMouseDown, setRightMouseDown] = useState(false);
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });
  const { camera } = useThree();

  const handleMouseDown = (event) => {
    if (event.button === 2) {
      setRightMouseDown(true);
      setPrevMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseMove = (event) => {
    if (isRightMouseDown) {
      const currentMousePosition = { x: event.clientX, y: event.clientY };
      const delta = {
        x: currentMousePosition.x - prevMousePosition.x,
        y: currentMousePosition.y - prevMousePosition.y,
      };

      const rotationSpeed = 0.005; // 调整旋转速度

      // 应用旋转变换
      modelRef.current.rotation.y += delta.x * rotationSpeed;
      modelRef.current.rotation.x += delta.y * rotationSpeed;

      setPrevMousePosition(currentMousePosition);
    }
  };

  const handleMouseUp = () => {
    setRightMouseDown(false);
  };

  // Jsx to render our cube
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={1000} color="#fff" />
        <primitive object = {model.scene} ref={modelRef}/>
        <orbitControls args={[camera]} enableRotate={false} />
      </Canvas>
    </div>
  )
}


function App() {
  return (     
    <Bodyviewer />
  );
}

export default App;
