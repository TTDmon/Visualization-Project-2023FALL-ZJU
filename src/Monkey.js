import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader, useThree} from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import React, { useRef, useEffect, useState} from 'react';
import { Vector3 } from 'three';
import * as THREE from 'three';

export default function Monkey() {
    const gltf = useLoader(GLTFLoader, 'models/MaleCharBaseMesh.glb');

    return (
            <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
                <directionalLight
                    position={[3.3, 1.0, 4.4]}
                    castShadow
                    intensity={Math.PI * 2}
                />
                <primitive
                    object={gltf.scene}
                    position={[0, 1, 0]}
                    children-0-castShadow
                />
                <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
                    <meshStandardMaterial />
                </Circle>
                <OrbitControls target={[0, 1, 0] } enableZoom={false} enablePan = {false}/>
            </Canvas>
    )
}