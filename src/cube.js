import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Cube2(props) {
  // Use useRef hook to access the mesh element
  const mesh = useRef();

  //Basic animation to rotate our cube using animation frame
  useFrame ( ()=> (mesh.current.rotation.x += 0.01))

  // Jsx to render our 3d cube. Our cube will have height
  // width and depth equal 2 units.
  // You also need a material so that you can add color
  // and show shadows. We are using the standard
  // material <<meshStandardMaterial />   

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
      <meshStandardMaterial color={"orange"}/> 
    </mesh>
  );
}

// Basic app structure to render a 3d cube
//<ambientLight /> is the standard light to use, otherwise
// everything comes out as black
function Ele() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10,10,10]} />
      <Cube2 />
    </Canvas>
  );
}

export default Ele;